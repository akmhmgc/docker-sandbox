FROM alpine:latest
WORKDIR /work
RUN touch foo.txt
RUN --mount=type=bind,target=. ls
RUN ls
