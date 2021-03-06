//import axios from "axios";
//import qs from "qs";
import Https from "../.././providers/http-service.js";
//export const findUserById = param => {return axios.post(`/api/vue/vLogin.html`, qs.stringify(param)).then(req => user);}
export const findUserById = param => {return Https({url: `/vue/vMenu.html`, method: 'post'}, param).then(req => user)}
export const findOrgById = param => {return Https({url: `/vue/vMenu.html`, method: 'post'}, param).then(req => organization)}

var user = {
	"data":{
		"total":15,
		"rows":[
			{
				"operationPassword":"b1d5ce06234f509119ebdef9cf648bc3",
				"gender":"22",
				"organizationName":"西门子测试",
				"homePhone":"",
				"userNo":"",
				"isLoginUser":1,
				"isActive":1,
				"isInner":true,
				"organizationId":"8bf6042a2c2242a98dd07d838febfff5",
				"createdAt":1552381537000,
				"password":"a46b2185ddb385540dd3ca027b7d00bd",
				"mobilePhone":"",
				"officePhone":"",
				"loginName":"aaaaaa11",
				"name":"123",
				"id":"1cf05379e49848de8c8f4afbf710784d",
				"email":"372109956@qq.com",
				"updatedAt":1552381549000
			},
			{
				"operationPassword":"50e35de7aaabcc945702f63666709058",
				"gender":"",
				"organizationName":"西门子测试",
				"homePhone":"",
				"userNo":"022333",
				"isLoginUser":1,
				"isActive":0,
				"isInner":true,
				"organizationId":"8bf6042a2c2242a98dd07d838febfff5",
				"createdAt":1544778217000,
				"password":"fe7729e7c26ce0a892c9c619e4b69a5b",
				"mobilePhone":"",
				"officePhone":"",
				"loginName":"libo",
				"name":"libo",
				"id":"62105332a0c045c89685c160ca516b6e",
				"email":"",
				"updatedAt":1551683050000
			},
			{
				"operationPassword":"a3d428b52cd153f5372058c8521ed701",
				"gender":"",
				"organizationName":"西门子测试",
				"homePhone":"",
				"userNo":"",
				"isLoginUser":0,
				"isActive":1,
				"lastLoginIp":"192.168.10.159",
				"isInner":true,
				"organizationId":"8bf6042a2c2242a98dd07d838febfff5",
				"createdAt":1551164556000,
				"lastLoginTime":1551850631000,
				"password":"aa3b133309d970209e50acf94e832061",
				"mobilePhone":"",
				"officePhone":"",
				"loginName":"zhuchao",
				"name":"User",
				"id":"0a221312d2b34059a5edc306867735b8",
				"email":"",
				"updatedAt":1551165051000
			},
			{
				"operationPassword":"f78c8ef93cab5f549907c841dae73d9d",
				"gender":"11",
				"organizationName":"西门子测试",
				"attributeSetId":"80465ddf1e3447439b811c3a869f158d",
				"homePhone":"",
				"userNo":"NO000006133",
				"isLoginUser":false,
				"isActive":false,
				"isInner":true,
				"organizationId":"8bf6042a2c2242a98dd07d838febfff5",
				"createdAt":1541065640000,
				"password":"99914b932bd37a50b983c5e7c90ae93b",
				"attributeSetName":"A类商业用户",
				"mobilePhone":"",
				"officePhone":"",
				"loginName":"",
				"name":"仲冬京",
				"id":"7499b5dcc4ca40bd9ab22acd74e6364b",
				"email":"",
				"updatedAt":1542105015000
			},
			{
				"operationPassword":"bb8fd9e5ca1e46f7d3d90f059d8f485d",
				"gender":"11",
				"organizationName":"西门子测试",
				"homePhone":"",
				"userNo":"",
				"isLoginUser":true,
				"isActive":true,
				"lastLoginIp":"127.0.0.1",
				"isInner":true,
				"organizationId":"8bf6042a2c2242a98dd07d838febfff5",
				"createdAt":1551074157000,
				"lastLoginTime":1551175192000,
				"password":"d05ebc38c7a8a1b312817df7c7902400",
				"mobilePhone":"",
				"officePhone":"",
				"loginName":"meng",
				"name":"吕猛",
				"id":"9d897bb0934648d3930c623c77239353",
				"email":"",
				"lockExpires":1552406400000,
				"updatedAt":1551682967000
			},
			{
				"gender":"22",
				"organizationName":"西门子测试",
				"isLoginUser":true,
				"isActive":true,
				"lastLoginIp":"127.0.0.1",
				"isInner":true,
				"organizationId":"8bf6042a2c2242a98dd07d838febfff5",
				"createdAt":1542109624000,
				"lastLoginTime":1552454420000,
				"password":"d96a044c0d3247db866cefc830bdc976",
				"loginName":"user",
				"name":"张欣怡",
				"id":"11a53292c80b4d5eaee9589fca234520",
				"updatedAt":1551073364000
			},
			{
				"operationPassword":"9c13de3fa7e09683515c7a48a1604a12",
				"gender":"11",
				"organizationName":"西门子测试",
				"homePhone":"",
				"userNo":"1234",
				"isLoginUser":true,
				"isActive":true,
				"lastLoginIp":"192.168.10.22",
				"isInner":true,
				"organizationId":"8bf6042a2c2242a98dd07d838febfff5",
				"createdAt":1545009800000,
				"lastLoginTime":1545031299000,
				"password":"58b45d6e4ec30e02f5c1ea240509884c",
				"mobilePhone":"",
				"officePhone":"",
				"loginName":"zg",
				"name":"张港",
				"id":"0ce16412a54048859a9346421d0ce274",
				"email":""
			},
			{
				"operationPassword":"1024da2ce94673b47012ce7565466448",
				"gender":"22",
				"organizationName":"西门子测试",
				"homePhone":"",
				"userNo":"",
				"isLoginUser":true,
				"isActive":true,
				"lastLoginIp":"127.0.0.1",
				"isInner":true,
				"organizationId":"8bf6042a2c2242a98dd07d838febfff5",
				"createdAt":1545010411000,
				"lastLoginTime":1550035888000,
				"password":"bf9d03cad113e9782080a090bd997b1e",
				"mobilePhone":"",
				"officePhone":"",
				"loginName":"zll",
				"name":"张路路",
				"id":"de722ca915454228a50db39612fc7cec",
				"email":"",
				"updatedAt":1550027022000
			},
			{
				"operationPassword":"666f9b1e4031d03bfb8a40b877e5c47c",
				"gender":"",
				"organizationName":"西门子测试",
				"homePhone":"",
				"userNo":"",
				"isLoginUser":true,
				"isActive":true,
				"isInner":true,
				"organizationId":"8bf6042a2c2242a98dd07d838febfff5",
				"createdAt":1545015560000,
				"password":"6dbf8c3e45987890fb61c6c9528a3122",
				"mobilePhone":"",
				"officePhone":"",
				"loginName":"test",
				"name":"数据过滤",
				"id":"de02046f09e24c1c8b884820eb500e30",
				"email":""
			},
			{
				"operationPassword":"763d989e74df4b7cd9fa10c314f69fdc",
				"gender":"22",
				"organizationName":"西门子测试",
				"homePhone":"",
				"userNo":"",
				"isLoginUser":true,
				"isActive":true,
				"lastLoginIp":"127.0.0.1",
				"isInner":true,
				"organizationId":"8bf6042a2c2242a98dd07d838febfff5",
				"createdAt":1545209190000,
				"lastLoginTime":1545209425000,
				"password":"6293272a530cd24b6d0f527bdb287329",
				"mobilePhone":"",
				"officePhone":"",
				"loginName":"aaaaaa",
				"name":"权限测试",
				"id":"35e45309bdd643ed9a0f117129c1cd06",
				"email":"",
				"updatedAt":1552296170000
			},
			{
				"operationPassword":"03e951ce588b65793ce16e3881433137",
				"gender":"",
				"organizationName":"西门子测试",
				"homePhone":"",
				"userNo":"",
				"isLoginUser":true,
				"isActive":true,
				"lastLoginIp":"127.0.0.1",
				"isInner":true,
				"organizationId":"8bf6042a2c2242a98dd07d838febfff5",
				"createdAt":1545012672000,
				"lastLoginTime":1551404947000,
				"password":"b455920d0c3a8a5390103838153a3280",
				"mobilePhone":"",
				"officePhone":"",
				"loginName":"libo00",
				"name":"李博",
				"id":"2687acb8819c4321949fd3afdb5c1766",
				"email":"",
				"updatedAt":1552294366000
			},
			{
				"operationPassword":"f78c8ef93cab5f549907c841dae73d9d",
				"gender":"22",
				"organizationName":"4#分厂",
				"homePhone":"",
				"userNo":"",
				"isLoginUser":false,
				"isActive":true,
				"isInner":true,
				"organizationId":"69b63d4f779043318086a91dd9a22750",
				"createdAt":1545800989000,
				"password":"99914b932bd37a50b983c5e7c90ae93b",
				"mobilePhone":"",
				"officePhone":"",
				"loginName":"",
				"name":"李四",
				"id":"515828afc3484a0492bbfce0e6889b55",
				"email":"",
				"updatedAt":1552295826000
			},
			{
				"organizationName":"西门子测试",
				"userNo":"NO.00008",
				"isLoginUser":true,
				"isActive":true,
				"lastLoginIp":"127.0.0.1",
				"isInner":true,
				"organizationId":"8bf6042a2c2242a98dd07d838febfff5",
				"createdAt":1542109626000,
				"lastLoginTime":1544166871000,
				"photoUrl":"\\home\\pms_sr\\2018\\9\\26\\timg.jpg",
				"password":"44d41f6eacf9157a38344a60b1582985",
				"loginName":"lh",
				"name":"李好",
				"id":"11a53292c80b4d5eaee9589fca234521",
				"updatedAt":1542109629000
			},
			{
				"operationPassword":"ca16e59131f34eb9f4e5d2aee01603ac",
				"gender":"",
				"organizationName":"西门子测试",
				"homePhone":"",
				"userNo":"",
				"isLoginUser":true,
				"isActive":true,
				"lastLoginIp":"192.168.10.26",
				"isInner":true,
				"organizationId":"8bf6042a2c2242a98dd07d838febfff5",
				"createdAt":1545016059000,
				"lastLoginTime":1545031238000,
				"password":"59efac8139f47205280c2c843508075c",
				"mobilePhone":"",
				"officePhone":"",
				"loginName":"org",
				"name":"组织机构过滤",
				"id":"82eff4cbb94848dd9771888f8ee70376",
				"email":""
			},
			{
				"operationPassword":"a0d7aedc92bd2c7e6918e639afca86d1",
				"gender":"",
				"organizationName":"西门子测试",
				"homePhone":"",
				"userNo":"",
				"isLoginUser":true,
				"isActive":true,
				"lastLoginIp":"127.0.0.1",
				"isInner":true,
				"organizationId":"8bf6042a2c2242a98dd07d838febfff5",
				"createdAt":1542848569000,
				"lastLoginTime":1552453427000,
				"password":"9f491fdc0b3e0f9752818ef74e422511",
				"mobilePhone":"",
				"officePhone":"",
				"loginName":"unatiti",
				"name":"胡娅婷",
				"id":"c06db7c83ce546008dd23cd120d6adc3",
				"email":"",
				"updatedAt":1552296370000
			}
		]
	},
	"resultCode":"200",
	"resultMessage":"请求成功"
}

var organization = {
	"data":[
		{
			"isInstance":true,
			"path":"/8bf6042a2c2242a98dd07d838febfff5",
			"isDepartment":false,
			"level":1,
			"children":[
				{
					"isInstance":false,
					"path":"/8bf6042a2c2242a98dd07d838febfff5/24eafaf94e774adabce65d4c8e585f27",
					"isDepartment":false,
					"level":2,
					"children":[
						{
							"isInstance":false,
							"path":"/8bf6042a2c2242a98dd07d838febfff5/24eafaf94e774adabce65d4c8e585f27/5ca33cba4d6e49ecac1b1ecfed7dd3ae",
							"isDepartment":false,
							"level":3,
							"pid":"24eafaf94e774adabce65d4c8e585f27",
							"id":"5ca33cba4d6e49ecac1b1ecfed7dd3ae",
							"text":"14#科室",
							"itype":"org",
							"open":false
						},
						{
							"isInstance":false,
							"path":"/8bf6042a2c2242a98dd07d838febfff5/24eafaf94e774adabce65d4c8e585f27/7d683b08addf4f89b9c303433d8a8940",
							"isDepartment":false,
							"level":3,
							"pid":"24eafaf94e774adabce65d4c8e585f27",
							"id":"7d683b08addf4f89b9c303433d8a8940",
							"text":"11#科室",
							"itype":"org",
							"open":false
						},
						{
							"isInstance":false,
							"path":"/8bf6042a2c2242a98dd07d838febfff5/24eafaf94e774adabce65d4c8e585f27/b5e1e58edb8c4de88834abe81343fbc7",
							"isDepartment":false,
							"level":3,
							"pid":"24eafaf94e774adabce65d4c8e585f27",
							"id":"b5e1e58edb8c4de88834abe81343fbc7",
							"text":"13#科室",
							"itype":"org",
							"open":false
						},
						{
							"isInstance":false,
							"path":"/8bf6042a2c2242a98dd07d838febfff5/24eafaf94e774adabce65d4c8e585f27/f63c14de777e413a858c02a564f5b67c",
							"isDepartment":false,
							"level":3,
							"pid":"24eafaf94e774adabce65d4c8e585f27",
							"id":"f63c14de777e413a858c02a564f5b67c",
							"text":"12#科室",
							"itype":"org",
							"open":false
						}
					],
					"pid":"8bf6042a2c2242a98dd07d838febfff5",
					"id":"24eafaf94e774adabce65d4c8e585f27",
					"text":"1#分厂",
					"itype":"org",
					"open":false
				},
				{
					"isInstance":false,
					"path":"/8bf6042a2c2242a98dd07d838febfff5/2ef50af816c947f9ae4329d7b41ba250",
					"isDepartment":false,
					"level":2,
					"children":[
						{
							"isInstance":false,
							"path":"/8bf6042a2c2242a98dd07d838febfff5/2ef50af816c947f9ae4329d7b41ba250/3ec7b9a122fd48db9c4b5ad78fe5a38c",
							"isDepartment":false,
							"level":3,
							"pid":"2ef50af816c947f9ae4329d7b41ba250",
							"id":"3ec7b9a122fd48db9c4b5ad78fe5a38c",
							"text":"21#科室",
							"itype":"org",
							"open":false
						},
						{
							"isInstance":false,
							"path":"/8bf6042a2c2242a98dd07d838febfff5/2ef50af816c947f9ae4329d7b41ba250/8683fbfe438b4ccbb7e9269e77d18392",
							"isDepartment":false,
							"level":3,
							"pid":"2ef50af816c947f9ae4329d7b41ba250",
							"id":"8683fbfe438b4ccbb7e9269e77d18392",
							"text":"23#科室",
							"itype":"org",
							"open":false
						},
						{
							"isInstance":false,
							"path":"/8bf6042a2c2242a98dd07d838febfff5/2ef50af816c947f9ae4329d7b41ba250/f44fd3f9d98b47918158173d1d54104b",
							"isDepartment":false,
							"level":3,
							"pid":"2ef50af816c947f9ae4329d7b41ba250",
							"id":"f44fd3f9d98b47918158173d1d54104b",
							"text":"22#科室",
							"itype":"org",
							"open":false
						}
					],
					"pid":"8bf6042a2c2242a98dd07d838febfff5",
					"id":"2ef50af816c947f9ae4329d7b41ba250",
					"text":"2#分厂",
					"itype":"org",
					"open":false
				},
				{
					"isInstance":false,
					"path":"/8bf6042a2c2242a98dd07d838febfff5/42a6e3c4564747748ee6a43005c95b1d",
					"isDepartment":false,
					"level":2,
					"pid":"8bf6042a2c2242a98dd07d838febfff5",
					"id":"42a6e3c4564747748ee6a43005c95b1d",
					"text":"3#分厂",
					"itype":"org",
					"open":false
				},
				{
					"isInstance":false,
					"path":"/8bf6042a2c2242a98dd07d838febfff5/69b63d4f779043318086a91dd9a22750",
					"isDepartment":false,
					"level":2,
					"pid":"8bf6042a2c2242a98dd07d838febfff5",
					"id":"69b63d4f779043318086a91dd9a22750",
					"text":"4#分厂",
					"itype":"org",
					"open":false
				}
			],
			"pid":"",
			"id":"8bf6042a2c2242a98dd07d838febfff5",
			"text":"西门子测试",
			"type":"root",
			"itype":"org",
			"open":false
		}
	],
	"resultCode":"200",
	"resultMessage":"请求成功"
}