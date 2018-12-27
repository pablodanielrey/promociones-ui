#!/bin/bash
echo "corriendo en el puerto 20105"
docker run --rm -ti --name promociones-ui -v $(pwd)/src:/src -v /src/firebase/promociones:/firebase -p 9005:9005 -p 20105:4200 desarrollo-ui
