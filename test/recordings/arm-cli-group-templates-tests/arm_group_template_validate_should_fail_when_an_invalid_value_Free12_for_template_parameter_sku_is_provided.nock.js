// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '38b598fc-e57a-423f-b2e7-dc0ddb631f1f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://gallery.azure.com:443')
  .get('/Microsoft.Gallery/galleryitems/Microsoft.ASPNETStarterSite.0.2.2-preview')
  .reply(200, "{\"identity\":\"Microsoft.ASPNETStarterSite.0.2.2-preview\",\"publisher\":\"Microsoft\",\"publisherDisplayName\":\"Microsoft\",\"itemName\":\"ASPNETStarterSite\",\"itemDisplayName\":\"ASP.NET Starter Site\",\"version\":\"0.2.2-preview\",\"summary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"longSummary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"description\":\"<p>Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website.</p>\",\"resourceGroupName\":null,\"definitionTemplates\":{\"uiDefinitionFileUrl\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/UIDefinition.json\",\"defaultDeploymentTemplateId\":\"website_NewHostingPlan-Default\",\"deploymentTemplateFileUrls\":{\"website_ExistingHostingPlan\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_ExistingHostingPlan.json\",\"website_NewHostingPlan\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan.json\",\"website_NewHostingPlan-Default\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"website_NewHostingPlan_BasicStandard\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan_BasicStandard.json\"}},\"categoryIds\":[\"web\",\"starterSite\"],\"screenshotUrls\":[],\"links\":[{\"id\":\"0\",\"displayName\":\"About Microsoft\",\"uri\":\"http://www.microsoft.com/\"},{\"id\":\"1\",\"displayName\":\"Documentation\",\"uri\":\"http://www.microsoft.com/web/category/all\"}],\"iconFileUrls\":{\"small\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Small.png\",\"medium\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Medium.png\",\"large\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Large.png\",\"wide\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Wide.png\",\"hero\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'x-ms-version': '4.14.0.133 (a2a340b.150108-1230)',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'browserId=e43c9e31be664c53bdb34026e15e0560; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 09 Jul 2015 21:42:55 GMT',
  'content-length': '2978' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1321?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xDeploymentTestGroup1321' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-request-id': 'f2128150-218c-496a-a776-aeb832cc8347',
  'x-ms-correlation-request-id': 'f2128150-218c-496a-a776-aeb832cc8347',
  'x-ms-routing-request-id': 'WESTUS:20150709T214256Z:f2128150-218c-496a-a776-aeb832cc8347',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 09 Jul 2015 21:42:55 GMT',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1321?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1321\",\"name\":\"xDeploymentTestGroup1321\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1184',
  'x-ms-request-id': '9241bc5f-6057-4f19-9e74-25e3ce61d1b6',
  'x-ms-correlation-request-id': '9241bc5f-6057-4f19-9e74-25e3ce61d1b6',
  'x-ms-routing-request-id': 'WESTUS:20150709T214256Z:9241bc5f-6057-4f19-9e74-25e3ce61d1b6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 09 Jul 2015 21:42:55 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://gallery.azure.com:443')
  .get('/Microsoft.Gallery/galleryitems/Microsoft.ASPNETStarterSite.0.2.2-preview')
  .reply(200, "{\"identity\":\"Microsoft.ASPNETStarterSite.0.2.2-preview\",\"publisher\":\"Microsoft\",\"publisherDisplayName\":\"Microsoft\",\"itemName\":\"ASPNETStarterSite\",\"itemDisplayName\":\"ASP.NET Starter Site\",\"version\":\"0.2.2-preview\",\"summary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"longSummary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"description\":\"<p>Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website.</p>\",\"resourceGroupName\":null,\"definitionTemplates\":{\"uiDefinitionFileUrl\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/UIDefinition.json\",\"defaultDeploymentTemplateId\":\"website_NewHostingPlan-Default\",\"deploymentTemplateFileUrls\":{\"website_ExistingHostingPlan\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_ExistingHostingPlan.json\",\"website_NewHostingPlan\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan.json\",\"website_NewHostingPlan-Default\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"website_NewHostingPlan_BasicStandard\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan_BasicStandard.json\"}},\"categoryIds\":[\"web\",\"starterSite\"],\"screenshotUrls\":[],\"links\":[{\"id\":\"0\",\"displayName\":\"About Microsoft\",\"uri\":\"http://www.microsoft.com/\"},{\"id\":\"1\",\"displayName\":\"Documentation\",\"uri\":\"http://www.microsoft.com/web/category/all\"}],\"iconFileUrls\":{\"small\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Small.png\",\"medium\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Medium.png\",\"large\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Large.png\",\"wide\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Wide.png\",\"hero\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'x-ms-version': '4.14.0.133 (a2a340b.150108-1230)',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'browserId=5b47fa081e064d67be55c936d6216d21; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 09 Jul 2015 21:42:56 GMT',
  'content-length': '2978' });
 return result; },
function (nock) { 
var result = 
nock('https://gallerystoreprodch.blob.core.windows.net:443')
  .get('/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json')
  .reply(200, "{\r\n  \"$schema\": \"http://schema.management.azure.com/schemas/2014-04-01-preview/deploymentTemplate.json#\",\r\n  \"contentVersion\": \"1.0.0.0\",\r\n  \"parameters\": {\r\n    \"siteName\": {\r\n      \"type\": \"string\"\r\n    },\r\n    \"hostingPlanName\": {\r\n      \"type\": \"string\"\r\n    },\r\n    \"siteLocation\": {\r\n      \"type\": \"string\"\r\n    },\r\n    \"sku\": {\r\n      \"type\": \"string\",\r\n      \"allowedValues\": [\r\n        \"Free\",\r\n        \"Shared\",\r\n        \"Basic\",\r\n        \"Standard\"\r\n      ],\r\n      \"defaultValue\": \"Free\"\r\n    },\r\n    \"workerSize\": {\r\n      \"type\": \"string\",\r\n      \"allowedValues\": [\r\n        \"0\",\r\n        \"1\",\r\n        \"2\"\r\n      ],\r\n      \"defaultValue\": \"0\"\r\n    }\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"apiVersion\": \"2014-04-01\",\r\n      \"name\": \"[parameters('hostingPlanName')]\",\r\n      \"type\": \"Microsoft.Web/serverfarms\",\r\n      \"location\": \"[parameters('siteLocation')]\",\r\n      \"properties\": {\r\n        \"name\": \"[parameters('hostingPlanName')]\",\r\n        \"sku\": \"[parameters('sku')]\",\r\n        \"workerSize\": \"[parameters('workerSize')]\",\r\n        \"numberOfWorkers\": 1\r\n      }\r\n    },\r\n    {\r\n      \"apiVersion\": \"2014-04-01\",\r\n      \"name\": \"[parameters('siteName')]\",\r\n      \"type\": \"Microsoft.Web/sites\",\r\n      \"location\": \"[parameters('siteLocation')]\",\r\n      \"tags\": {\r\n        \"[concat('hidden-related:', resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\": \"Resource\"\r\n      },\r\n      \"dependsOn\": [\r\n        \"[concat('Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n      ],\r\n      \"properties\": {\r\n        \"name\": \"[parameters('siteName')]\",\r\n        \"serverFarm\": \"[parameters('hostingPlanName')]\"\r\n      },\r\n      \"resources\": [\r\n        {\r\n          \"apiVersion\": \"2014-04-01\",\r\n          \"name\": \"MSDeploy\",\r\n          \"type\": \"Extensions\",\r\n          \"dependsOn\": [\r\n            \"[concat('Microsoft.Web/Sites/', parameters('siteName'))]\"\r\n          ],\r\n          \"properties\": {\r\n            \"packageUri\": \"https://auxmktplceprod.blob.core.windows.net/packages/StarterSite-modified.zip\",\r\n            \"dbType\": \"None\",\r\n            \"connectionString\": \"\",\r\n            \"setParameters\": {\r\n              \"Application Path\": \"[parameters('siteName')]\"\r\n            }\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"apiVersion\": \"2014-04\",\r\n      \"name\": \"[concat(parameters('hostingPlanName'), '-', resourceGroup().name)]\",\r\n      \"type\": \"microsoft.insights/autoscalesettings\",\r\n      \"location\": \"East US\",\r\n      \"tags\": {\r\n        \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\": \"Resource\"\r\n      },\r\n      \"dependsOn\": [\r\n        \"[concat('Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n      ],\r\n      \"properties\": {\r\n        \"profiles\": [\r\n          {\r\n            \"name\": \"Default\",\r\n            \"capacity\": {\r\n              \"minimum\": \"1\",\r\n              \"maximum\": \"2\",\r\n              \"default\": \"1\"\r\n            },\r\n            \"rules\": [\r\n              {\r\n                \"metricTrigger\": {\r\n                  \"metricName\": \"CpuPercentage\",\r\n                  \"metricResourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\",\r\n                  \"timeGrain\": \"PT1M\",\r\n                  \"statistic\": \"Average\",\r\n                  \"timeWindow\": \"PT10M\",\r\n                  \"timeAggregation\": \"Average\",\r\n                  \"operator\": \"GreaterThan\",\r\n                  \"threshold\": 80.0\r\n                },\r\n                \"scaleAction\": {\r\n                  \"direction\": \"Increase\",\r\n                  \"type\": \"ChangeCount\",\r\n                  \"value\": \"1\",\r\n                  \"cooldown\": \"PT10M\"\r\n                }\r\n              },\r\n              {\r\n                \"metricTrigger\": {\r\n                  \"metricName\": \"CpuPercentage\",\r\n                  \"metricResourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\",\r\n                  \"timeGrain\": \"PT1M\",\r\n                  \"statistic\": \"Average\",\r\n                  \"timeWindow\": \"PT1H\",\r\n                  \"timeAggregation\": \"Average\",\r\n                  \"operator\": \"LessThan\",\r\n                  \"threshold\": 60.0\r\n                },\r\n                \"scaleAction\": {\r\n                  \"direction\": \"Decrease\",\r\n                  \"type\": \"ChangeCount\",\r\n                  \"value\": \"1\",\r\n                  \"cooldown\": \"PT1H\"\r\n                }\r\n              }\r\n            ]\r\n          }\r\n        ],\r\n        \"enabled\": false,\r\n        \"name\": \"[concat(parameters('hostingPlanName'), '-', resourceGroup().name)]\",\r\n        \"targetResourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n      }\r\n    },\r\n    {\r\n      \"apiVersion\": \"2014-04\",\r\n      \"name\": \"[concat('ServerErrors ', parameters('siteName'))]\",\r\n      \"type\": \"microsoft.insights/alertrules\",\r\n      \"location\": \"East US\",\r\n      \"tags\": {\r\n        \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\": \"Resource\"\r\n      },\r\n      \"dependsOn\": [\r\n        \"[concat('Microsoft.Web/sites/', parameters('siteName'))]\"\r\n      ],\r\n      \"properties\": {\r\n        \"name\": \"[concat('ServerErrors ', parameters('siteName'))]\",\r\n        \"description\": \"[concat(parameters('siteName'), ' has some server errors, status code 5xx.')]\",\r\n        \"isEnabled\": false,\r\n        \"condition\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\r\n          \"dataSource\": {\r\n            \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\r\n            \"resourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\",\r\n            \"metricName\": \"Http5xx\"\r\n          },\r\n          \"operator\": \"GreaterThan\",\r\n          \"threshold\": 0.0,\r\n          \"windowSize\": \"PT5M\"\r\n        },\r\n        \"action\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\r\n          \"sendToServiceOwners\": true,\r\n          \"customEmails\": []\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"apiVersion\": \"2014-04\",\r\n      \"name\": \"[concat('ForbiddenRequests ', parameters('siteName'))]\",\r\n      \"type\": \"microsoft.insights/alertrules\",\r\n      \"location\": \"East US\",\r\n      \"tags\": {\r\n        \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\": \"Resource\"\r\n      },\r\n      \"dependsOn\": [\r\n        \"[concat('Microsoft.Web/sites/', parameters('siteName'))]\"\r\n      ],\r\n      \"properties\": {\r\n        \"name\": \"[concat('ForbiddenRequests ', parameters('siteName'))]\",\r\n        \"description\": \"[concat(parameters('siteName'), ' has some requests that are forbidden, status code 403.')]\",\r\n        \"isEnabled\": false,\r\n        \"condition\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\r\n          \"dataSource\": {\r\n            \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\r\n            \"resourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\",\r\n            \"metricName\": \"Http403\"\r\n          },\r\n          \"operator\": \"GreaterThan\",\r\n          \"threshold\": 0,\r\n          \"windowSize\": \"PT5M\"\r\n        },\r\n        \"action\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\r\n          \"sendToServiceOwners\": true,\r\n          \"customEmails\": []\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"apiVersion\": \"2014-04\",\r\n      \"name\": \"[concat('CPUHigh ', parameters('hostingPlanName'))]\",\r\n      \"type\": \"microsoft.insights/alertrules\",\r\n      \"location\": \"East US\",\r\n      \"tags\": {\r\n        \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\": \"Resource\"\r\n      },\r\n      \"dependsOn\": [\r\n        \"[concat('Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n      ],\r\n      \"properties\": {\r\n        \"name\": \"[concat('CPUHigh ', parameters('hostingPlanName'))]\",\r\n        \"description\": \"[concat('The average CPU is high across all the instances of ', parameters('hostingPlanName'))]\",\r\n        \"isEnabled\": false,\r\n        \"condition\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\r\n          \"dataSource\": {\r\n            \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\r\n            \"resourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\",\r\n            \"metricName\": \"CpuPercentage\"\r\n          },\r\n          \"operator\": \"GreaterThan\",\r\n          \"threshold\": 90,\r\n          \"windowSize\": \"PT15M\"\r\n        },\r\n        \"action\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\r\n          \"sendToServiceOwners\": true,\r\n          \"customEmails\": []\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"apiVersion\": \"2014-04\",\r\n      \"name\": \"[concat('LongHttpQueue ', parameters('hostingPlanName'))]\",\r\n      \"type\": \"microsoft.insights/alertrules\",\r\n      \"location\": \"East US\",\r\n      \"tags\": {\r\n        \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\": \"Resource\"\r\n      },\r\n      \"dependsOn\": [\r\n        \"[concat('Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\"\r\n      ],\r\n      \"properties\": {\r\n        \"name\": \"[concat('LongHttpQueue ', parameters('hostingPlanName'))]\",\r\n        \"description\": \"[concat('The HTTP queue for the instances of ', parameters('hostingPlanName'), ' has a large number of pending requests.')]\",\r\n        \"isEnabled\": false,\r\n        \"condition\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\r\n          \"dataSource\": {\r\n            \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\r\n            \"resourceUri\": \"[concat(resourceGroup().id, '/providers/Microsoft.Web/serverfarms/', parameters('hostingPlanName'))]\",\r\n            \"metricName\": \"HttpQueueLength\"\r\n          },\r\n          \"operator\": \"GreaterThan\",\r\n          \"threshold\": 100.0,\r\n          \"windowSize\": \"PT5M\"\r\n        },\r\n        \"action\": {\r\n          \"odata.type\": \"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\r\n          \"sendToServiceOwners\": true,\r\n          \"customEmails\": []\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"apiVersion\": \"2014-04\",\r\n      \"name\": \"[parameters('siteName')]\",\r\n      \"type\": \"microsoft.insights/components\",\r\n      \"location\": \"Central US\",\r\n      \"tags\": {\r\n        \"[concat('hidden-link:', resourceGroup().id, '/providers/Microsoft.Web/sites/', parameters('siteName'))]\": \"Resource\"\r\n      },\r\n      \"dependsOn\": [\r\n        \"[concat('Microsoft.Web/sites/', parameters('siteName'))]\"\r\n      ],\r\n      \"properties\": {\r\n        \"applicationId\": \"[parameters('siteName')]\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'public, max-age=86400',
  'content-length': '11303',
  'content-type': 'application/json',
  'content-md5': 'c/rV0Ik0M0BRDG03M+EQzQ==',
  'last-modified': 'Fri, 10 Oct 2014 00:34:18 GMT',
  etag: '0x8D1B239101DC53B',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9b0e77e9-0001-007d-3690-ba156c000000',
  'x-ms-version': '2009-09-19',
  'x-ms-lease-status': 'unlocked',
  'x-ms-blob-type': 'BlockBlob',
  'access-control-expose-headers': 'x-ms-request-id,Server,x-ms-version,Content-Type,Cache-Control,Last-Modified,ETag,Content-MD5,x-ms-lease-status,x-ms-blob-type',
  'access-control-allow-origin': '*',
  date: 'Thu, 09 Jul 2015 21:42:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1321/deployments/fakedDeploymentName/validate?api-version=2014-04-01-preview', '*')
  .reply(400, "{\"error\":{\"code\":\"InvalidTemplate\",\"message\":\"Deployment template validation failed: 'The provided value for the template parameter 'sku' at line '1' and column '272' is not valid.'.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-request-id': '336c4b48-ff44-4646-908e-2c42fccf106f',
  'x-ms-correlation-request-id': '336c4b48-ff44-4646-908e-2c42fccf106f',
  'x-ms-routing-request-id': 'WESTUS:20150709T214257Z:336c4b48-ff44-4646-908e-2c42fccf106f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 09 Jul 2015 21:42:57 GMT',
  'content-length': '185' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1321?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDEzMjEtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1180',
  'x-ms-request-id': 'cdc345f2-a40e-4136-9640-78bac415b6dc',
  'x-ms-correlation-request-id': 'cdc345f2-a40e-4136-9640-78bac415b6dc',
  'x-ms-routing-request-id': 'WESTUS:20150709T214257Z:cdc345f2-a40e-4136-9640-78bac415b6dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 09 Jul 2015 21:42:57 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDEzMjEtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDEzMjEtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-request-id': 'f745a7b0-04d2-4abc-98ec-cfdcff67586d',
  'x-ms-correlation-request-id': 'f745a7b0-04d2-4abc-98ec-cfdcff67586d',
  'x-ms-routing-request-id': 'WESTUS:20150709T214312Z:f745a7b0-04d2-4abc-98ec-cfdcff67586d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 09 Jul 2015 21:43:12 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xDeploymentTestGroup1321'];};