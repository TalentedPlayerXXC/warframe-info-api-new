## warframe-info-api
### 感谢[WsureWarframe](https://github.com/WsureWarframe)的server
1. Warframe世界状态 __url:[/wf/①/②]()__
    - ① 必填参数
        - dev: 国际服英文`json`数据
        - detail:  国际服中文`json`数据
        - robot: 国际服中文`string`数据 （供机器人使用，缓存失效时间:2 min）
    - ② 必填参数
        - timestamp: 服务器时间
        - news: 新闻
        - events: 活动
        - alerts: 警报
        - sortie: 突击
        - syndicateMissions: 集团任务 (仅限dev、detail的json数据)
        - Ostrons: 地球赏金 (仅限robot的string数据)
        - Solaris: 金星赏金 (仅限robot的string数据)
        - EntratiSyndicate: 火卫二赏金 (仅限robot的string数据)
        - fissures: 裂缝
        - flashSales: 促销商品
        - invasions: 入侵
        - voidTrader: 奸商
        - dailyDeals: 达尔沃
        - persistentEnemies: 小小黑
        - earthCycle: 地球
        - cetusCycle: 地球平原
        - constructionProgress: 舰队
        - vallisCycle: 金星平原
        - nightwave: 电波
        - arbitration: 仲裁
        - cambionCycle: 火卫二平原
        - zarimanCycle: 扎里曼
2. warframeMarket 商品价格查询  __url:[/wm/①/②]()__
    - ① 必填参数
        - dev: 国际服`json`数据
        - robot: 国际服中文`string`数据 （供机器人使用，缓存失效时间:1 min）
    - ② 必填参数
        - 商品名称，可模糊(支持中英文)
3. rivenMarket 紫卡价格查询  __url:[/rm/①/②]()__
    - ① 必填参数
        - dev: 国际服`json`数据
        - robot: 国际服中文`string`数据 （供机器人使用，缓存失效时间:1 min）
    - ② 必填参数
        - 紫卡名称，可模糊(支持中英文，新武器建议英文搜索，词库中中文名更新不一定及时)
>  *由于灰机wiki反对爬虫，本功能目前只提供拼接搜索链接，后续可能废弃。*
4. ~~灰机wiki 查询 __url:[/wiki/①/②]()__~~
    - ① 必填参数
        - dev: 国际服`json`数据
        - robot: 国际服中文`string`数据 （供机器人使用，缓存失效时间:1 day）
    - ② 必填参数
        - 查询关键词，使用wiki的搜索接口
        
### 调用方式，以查询wm商品价格为例
#### ①. [GET/POST]  [/wm/robot/持久力](http://nymph.rbq.life:3000/wm/robot/持久力)
#### ②. [GET/POST]  [/wm/robot?type=持久力](http://nymph.rbq.life:3000/wm/robot?type=持久力)
