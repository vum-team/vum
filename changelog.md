# upgrade to vue2

important change:
- two way props bind is not support in vue2, use instance method and custom event instead, so all 'modal' like components usage is changed!
- only one root element!
- add '.native' when use native event, eg: '@click' => '@click.native'

# V0.1.1 - 2016/10/23
- New component: Circle Progress
- fix bug: [#29](https://github.com/vum-team/vum/issues/29)
