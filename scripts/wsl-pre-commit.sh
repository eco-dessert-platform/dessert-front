#!/bin/bash
set -e

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

nvm use 22
export PATH="$HOME/.yarn/bin:$PATH"

echo "✅ Node version: $(node -v)"
echo "✅ Yarn version: $(yarn --version)"

yarn lint-staged
yarn check-types