#!/bin/bash

set -e

CONTAINER_NAME=dessert_fe
IMAGE_NAME=dessert_fe

echo "🛑 이전 컨테이너 중지 및 제거 중..."
docker compose down

echo "🧹 이전 이미지 삭제 중 (이름: $IMAGE_NAME)..."
docker rmi -f $IMAGE_NAME || echo "⚠️ 이미지가 존재하지 않음, 생략"

echo "📦 새 이미지 빌드 중..."
docker compose build

echo "🚀 새 컨테이너 실행 중..."
docker compose up -d

echo "🔍 컨테이너 상태 확인:"
docker ps --filter "name=$CONTAINER_NAME"

echo "✅ 배포 완료: http://$(curl -s ifconfig.me):8855"
