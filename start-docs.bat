@echo off
setlocal
pushd "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo [TrackSwap Docs] Node.js was not found in PATH.
  echo Install Node.js 22 or newer, then run this file again.
  pause
  popd
  exit /b 1
)

if not exist "node_modules\vitepress\package.json" (
  echo [TrackSwap Docs] Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo [TrackSwap Docs] Dependency installation failed.
    pause
    popd
    exit /b 1
  )
)

echo [TrackSwap Docs] Starting http://127.0.0.1:5173/
echo Press Ctrl+C to stop the server.
call npm run dev

if errorlevel 1 (
  echo [TrackSwap Docs] The development server exited with an error.
  pause
)

popd
endlocal
