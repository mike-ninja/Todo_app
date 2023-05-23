#!/bin/sh

# Build directory in the client directory and copy to the server directory
cd client && npm run build && cp -r ./build ../server/build && cd ..

cd server && npm run server


