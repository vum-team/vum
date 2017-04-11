# v2.0.0-beta

VUM has been upgrade to vue@2.0 !

**note: v2.x is not compatable with v0.x**

important change from Vue@1.0 to Vue@2.0:

- two way props bind is not support in vue2, use instance method and custom event instead, so all 'modal' like components usage is changed!
- only one root element!
- `this === undefined` in directive
- add '.native' when use native event, eg: '@click' => '@click.native'

# V0.1.1 - 2016/10/23
- New component: Circle Progress
- fix bug: [#29](https://github.com/vum-team/vum/issues/29)
