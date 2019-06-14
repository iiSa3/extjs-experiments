FROM selenium/standalone-chrome

RUN sudo apt-get update && sudo apt-get install -y nodejs npm git expect-dev

COPY ./ /extjsproject
RUN sudo chmod -R 777 /extjsproject
RUN sudo rm -rf /extjsproject/node_modules

RUN sudo chmod +x /extjsproject/.teamcity/getsencha.sh
RUN /usr/bin/expect -f /extjsproject/.teamcity/getsencha.sh development..samgriffin.co.uk 7a4206de-106e-4c2c-8ec0-95d01c911111 development@samgriffin.co.uk

CMD cd /extjsproject && npm install && npm test