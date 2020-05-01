let tableValue = [
    {
      title: "影响业务",
      table: {
        tableTitleName: '该分钟应用访问异常的数据库拓扑信息111111',
        tableData: [
          {
            data: [
              {
                数据库租户:
                  'zarcore000_2132#url#http://antmonitor.alipay.com/ob/tenant?clusterGroup=obantloan&cluster=obantloan00&tenant=zarcore000_2132',
                应用名: 'mrchorder',
                机房: 'et2',
                tenant_topology服务器:
                  '11.189.47.21#url#http://antmonitor.alipay.com/machine/overview?hostname=OceanBase189047021.alipay.et2',
              },
              {
                数据库租户:
                  'zarcore000_2132#url#http://antmonitor.alipay.com/ob/tenant?clusterGroup=obantloan&cluster=obantloan00&tenant=zarcore000_2132',
                应用名: 'mrchorder',
                机房: 'em14',
                tenant_topology服务器:
                  '11.145.11.31#url#http://antmonitor.alipay.com/machine/overview?hostname=obdocker-9c840509-19000134.em14',
              },
              {
                数据库租户:
                  'zarcore000_2132#url#http://antmonitor.alipay.com/ob/tenant?clusterGroup=obantloan&cluster=obantloan00&tenant=zarcore000_2132',
                应用名: 'mrchorder',
                机房: 'et15',
                tenant_topology服务器:
                  '11.188.142.209#url#http://antmonitor.alipay.com/machine/overview?hostname=OceanBase188142209.alipay.et15',
              },
              {
                数据库租户:
                  'zarcore000_2132#url#http://antmonitor.alipay.com/ob/tenant?clusterGroup=obantloan&cluster=obantloan00&tenant=zarcore000_2132',
                应用名: 'mrchorder',
                机房: 'su18',
                tenant_topology服务器:
                  '11.38.40.56#url#http://antmonitor.alipay.com/machine/overview?hostname=obdocker-a3c0d4b1-955256522.su18',
              },
            ],
            columnName: ['应用名', '数据库租户', 'tenant_topology服务器', '机房'],
            tableName: '【202004271245】该分钟应用访问异常的数据库拓扑信息',
          },
        ],
      },
    },
    {
      title: "处理预案",
      table: {
        tableTitleName: '该分钟应用访问异常的数据库拓扑信息2222',
        tableData: [
          {
            data: [
              {
                数据库租户:
                  'zarcore000_2132#url#http://antmonitor.alipay.com/ob/tenant?clusterGroup=obantloan&cluster=obantloan00&tenant=zarcore000_2132',
                应用名: 'mrchorder',
                机房: 'et2',
                tenant_topology服务器:
                  '11.189.47.21#url#http://antmonitor.alipay.com/machine/overview?hostname=OceanBase189047021.alipay.et2',
              },
              {
                数据库租户:
                  'zarcore000_2132#url#http://antmonitor.alipay.com/ob/tenant?clusterGroup=obantloan&cluster=obantloan00&tenant=zarcore000_2132',
                应用名: 'mrchorder',
                机房: 'em14',
                tenant_topology服务器:
                  '11.145.11.31#url#http://antmonitor.alipay.com/machine/overview?hostname=obdocker-9c840509-19000134.em14',
              },
            ],
            columnName: ['应用名', '数据库租户', 'tenant_topology服务器', '机房'],
            tableName: '该分钟应用访问异常的数据库拓扑信息2222',
          },
        ],
      },
    },
    {
      title: "处理预案",
      table: null
    },
  ];

  let Tabledata = [
    {
        tableName: "该分钟应用访问异常的数据库拓扑信息111111",
        columnName: [
         {
           title: '应用名',
           dataIndex: '应用名',
           key: '应用名',
           render: text => <a href= "http://antmonitor.alipay.com/ob/tenant?clusterGroup=obantloan&cluster=obantloan00&tenant=zarcore000_2132">{text}</a>
         },
         {
           title: '数据库租户',
           dataIndex: '数据库租户',
           key: '数据库租户',
         },
         {
           title: 'tenant_topology服务器',
           dataIndex: 'tenant_topology服务器',
           key: 'tenant_topology服务器',
         },
         {
           title: '机房',
           dataIndex: '机房',
           key: '机房',
           render: text => <a href= "http://antmonitor.alipay.com/ob/tenant?clusterGroup=obantloan&cluster=obantloan00&tenant=zarcore000_2132">{text}</a>
         },
      ],
      dataSource: [
         {
           key: '1',
           应用名: 'zarcore000_2132',
           数据库租户: 'mrchorder',
           tenant_topology服务器: 'et2',
           机房: '11.145.11.31',
         },
      ]
    }
  ]
let result = tableValue.map(item=> {
    let obj = {}
    obj.title = item.title
    if(item.table) {
        obj.tableName = item.tableTitleName
        if(item.tableData[0].data.length>0) {
            obj.columnName = []
            obj.dataSource = []
            item.tableData[0].data.forEach((subItem, subIndex)=> {
                const [et2, url] = subItem['tenant_topology服务器'].split('#url#')
                let columnNameItem = {}
                let dataSourceItem = {
                    key: subIndex + 1,
                    "应用名": subItem['应用名'],
                    "数据库租户": subItem['数据库租户'],
                    "tenant_topology服务器": subItem['tenant_topology服务器'],
                    "机房": subItem['机房'],
                }
            })
        }
    }
})