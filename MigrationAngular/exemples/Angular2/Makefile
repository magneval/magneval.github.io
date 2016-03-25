.PHONY: ng
DIR:=$(PWD)
APPNAME:=app
UID:=$(shell id -u)
GID:=$(shell id -g)

run:
				docker-compose up

ng:
ifndef DO 
				@echo 'You must provide a "DO" parameter'
				@echo 'Example: make ng DO="generate component foo"'
				exit 1
endif
				docker-compose run --rm $(APPNAME) $(DO)

