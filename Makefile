
all: yarntest

.PHONY: yarntest
yarntest:
	git clean -dfx
	(cd e && yarn install && yarn test)
