#!/bin/bash
set -e

# Git 저장소 루트 찾기 (현재 디렉토리 또는 상위 디렉토리에서)
GIT_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)

# 스크립트가 있는 디렉토리 기준으로 프로젝트 루트 찾기
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SCRIPT_PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Git 루트가 있으면 그것을 사용, 없으면 스크립트 기준 디렉토리 사용
if [ -n "$GIT_ROOT" ] && [ -d "$GIT_ROOT" ]; then
  PROJECT_ROOT="$GIT_ROOT"
else
  PROJECT_ROOT="$SCRIPT_PROJECT_ROOT"
fi

cd "$PROJECT_ROOT" || exit 1

# NVM 설정 (있는 경우)
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  . "$NVM_DIR/nvm.sh"
  nvm use 22 2>/dev/null || echo "⚠️  Node 22 not found, using current node version"
fi

# Yarn 4를 사용하기 위해 corepack 활성화
if command -v corepack >/dev/null 2>&1; then
  corepack enable 2>/dev/null || true
  corepack prepare yarn@4.2.2 --activate 2>/dev/null || true
else
  echo "⚠️  corepack not found, trying to use yarn directly"
fi

# Yarn이 없는 경우 경고
if ! command -v yarn >/dev/null 2>&1; then
  echo "❌ Error: yarn command not found"
  echo "Please install yarn or enable corepack: corepack enable"
  exit 1
fi

echo "✅ Node version: $(node -v)"
echo "✅ Yarn version: $(yarn --version)"
echo "✅ Working directory: $(pwd)"

yarn lint-staged
yarn check-types
yarn format