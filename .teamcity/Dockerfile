FROM selenium/standalone-chrome

RUN sudo apt-get update && sudo apt-get install -y nodejs npm git expect-dev

COPY ./getsencha.sh /getsencha.sh

RUN sudo chmod +x /getsencha.sh
RUN /usr/bin/expect -f /getsencha.sh development..samgriffin.co.uk 7a4206de-106e-4c2c-8ec0-95d01c911111 development@samgriffin.co.uk
