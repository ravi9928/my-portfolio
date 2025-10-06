#!/bin/bash

# =====================
# Configuration
# =====================
EC2_USER="ubuntu"
EC2_HOST="ec2-65-0-106-77.ap-south-1.compute.amazonaws.com"
EC2_PATH="/var/www/html/raviraj.space/"
LOCAL_PROJECT_PATH="."  # Current folder
SSH_KEYS=(
  "/home/user/Downloads/pemaws.pem"
)
APP_NAME="raviraj-portfolio"

# =====================
# Find the first available SSH key
# =====================
for key in "${SSH_KEYS[@]}"; do
  if [ -f "$key" ]; then
    SSH_KEY="$key"
    break
  fi
done

if [ -z "$SSH_KEY" ]; then
  echo "Error: No valid SSH key found!"
  exit 1
fi

echo "Using SSH key: $SSH_KEY"

# =====================
# Build Next.js project locally
# =====================
echo "Installing dependencies and building Next.js project..."
npm install
npm run build

# =====================
# Upload files to EC2
# =====================
echo "Uploading .next/, public/, package.json, package-lock.json, and .env to EC2..."
rsync -avz -e "ssh -i $SSH_KEY" \
  .next public package.json package-lock.json .env \
  $EC2_USER@$EC2_HOST:$EC2_PATH

# =====================
# Install dependencies and restart the app on EC2
# =====================
ssh -i $SSH_KEY $EC2_USER@$EC2_HOST <<EOF
  cd $EC2_PATH
  npm install --production
  pm2 restart $APP_NAME || pm2 start npm --name "$APP_NAME" -- start
  pm2 save
EOF

echo "Deployment completed successfully!"