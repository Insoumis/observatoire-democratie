openssl aes-256-cbc -K $encrypted_758005290e99_key -iv $encrypted_758005290e99_iv -in .travis/deploy.enc -out /tmp/deploy_rsa -d
eval "$(ssh-agent -s)"
chmod 600 /tmp/deploy_rsa
ssh-add /tmp/deploy_rsa

git remote add deploy ssh://observatoire@163.172.60.184:/home/observatoire/front.git
git push deploy master
