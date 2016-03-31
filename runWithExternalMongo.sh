export HOSTNAME=`hostname`


if [ $HOSTNAME == "test.ingenio-promocionales.com" ]; then
    echo RUNNING APPLICATION IN PRODUCTION MODE
    export ROOT_URL=http://www.cubestudio.co
    export MONGO_URL=mongodb://cubestudio.co:27017/cubestudio
    meteor --production --port 80 run
else
    echo RUNNING APPLICATION IN DEVELOPMENT MODE
    export ROOT_URL=http://localhost:3000
    export MONGO_URL=mongodb://cubestudio.co:27017/cubestudio
    meteor --port 3000 run
fi

