FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install -y yum-utils alien
RUN rpm -Uvh https://mirrors.ripple.com/ripple-repo-el7.rpm
RUN yumdownloader --enablerepo=ripple-stable --releasever=el7 rippled
RUN rpm --import https://mirrors.ripple.com/rpm/RPM-GPG-KEY-ripple-release
RUN rpm -K rippled*.rpm
RUN alien -i --scripts rippled*.rpm
RUN rm rippled*.rpm

COPY rippled.cfg /opt/ripple/etc

ENTRYPOINT ["/opt/ripple/bin/rippled"]
