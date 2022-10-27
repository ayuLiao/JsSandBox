Storage = function Storage(){box.throwError("TypeError", "Illegal constructor") }
box.func_set_fake_toString(Storage)
box.rename(Storage.prototype, "Storage")


box.defineProperty(Storage, 'length', 0, true, false, false);
box.defineProperty(Storage, 'name', 'Storage', true, false, false);
box.defineProperty(Storage, 'arguments', null, false, false, false);
box.defineProperty(Storage, 'caller', null, false, false, false);


box.defineProperty(Storage.prototype, 'length', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Storage.prototype)["length"].get, "get length");
box.defineProperty(Storage.prototype, 'clear', function clear(){debugger;}, true, true, true); box.func_set_fake_toString(Storage.prototype.clear)
box.defineProperty(Storage.prototype, 'getItem', function getItem(){debugger;}, true, true, true); box.func_set_fake_toString(Storage.prototype.getItem)
box.defineProperty(Storage.prototype, 'key', function key(){debugger;}, true, true, true); box.func_set_fake_toString(Storage.prototype.key)
box.defineProperty(Storage.prototype, 'removeItem', function removeItem(){debugger;}, true, true, true); box.func_set_fake_toString(Storage.prototype.removeItem)
box.defineProperty(Storage.prototype, 'setItem', function setItem(){debugger;}, true, true, true); box.func_set_fake_toString(Storage.prototype.setItem)


localStorage = {};
Object.setPrototypeOf(localStorage,Storage.prototype)
box.defineProperty(localStorage, 'Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49', '1698372487605|1666531028,1666685400,1666708677,1666776538', true, true, true);
box.defineProperty(localStorage, 'zap:Stashed', '{"logEntries":{}}', true, true, true);
box.defineProperty(localStorage, 'YD00517437729195:WM_DIV', '2.7.5_af2952a4__1663106591254__1663034591254', true, true, true);
box.defineProperty(localStorage, 'search::history_457479af2348680d074dff7439c6ec1a', '[{"q":"python"}]', true, true, true);
box.defineProperty(localStorage, 'YD00517437729195:WM_TID', 'Ojzq5IxLjm9FVUFUBROQHwNCAURGjFv1', true, true, true);
box.defineProperty(localStorage, 'zap:SharedSession', '{"incrementId":4005,"lastEvent":{"path":[{"module":"SearchResultList","index":0}],"action":"Search","id":3953,"url":"https://www.zhihu.com/search?type=content&q=python"}}', true, true, true);
box.defineProperty(localStorage, 'uhiuhvk_wrnhq', '"{\"token\":\"1.12fede22f078df9ab870f8521\",\"timestamp\":1665717442008}"', true, true, true);
box.defineProperty(localStorage, 'YD00517437729195:WM_NI', 'Pl3cVeUsADF17qqCAelRS4Rlhs87aD8rBe5pXUek0bUoZlnXNhzHQBXi73ABodKA3k9BzqddqCmR7LtSG0LCMZ8YAi0pIIB80AXuqDMGEd8CAgS0s2E0RmGhw/e4cYoxT3g=', true, true, true);
box.defineProperty(localStorage, '__snaker__id', '', true, true, true);
box.defineProperty(localStorage, 'zhihu::comment_local_key', '[]', true, true, true);
box.defineProperty(localStorage, 'WM_CONFIG', '{"sConfig":"9ca170a1abeedba16ba1f2ac96ed26f3eafdcfe265aff1bad3ae70e2f4ee83e27fe2e6ee82e226a8aba2cfb43ef1f2ad90f025b6eee183a128e2bca4c3b92ae2f4ee8ee867e2e6fbd1af2aafbba7c3b939f4f0e4c3e26faffef6d3b328e2bdab8aa132f1f000cda161a7b3eedbb43cf0fea586ec2afaed00d1af2aa6bba3c3b93af4f4ee87e863e2e6fdd1b328e2adab8ea132f2f0e4c3f26fabfef6d4b33cf0feab8be270e2e6aa82ef79a7f4ee86e579e2e6aa82ef79a7f4ee86f679e2e6aa82ef79a7f4ee93e880e2e6ffcda169afb2eedbb128e2bda7c3b93bf4f0e4c3ee80a7b3eedbb83cf0fea195e863e2e6fdd1b328e2b3bc86f02afaeb00cda167b8bba7c3b939f4f0e4c3f366e2e6eebac73cf4ebffd8b739f5e9fedab433f7fee4c3e870a1fef695f17fa7f4ee83ef2afafeeecda163b6b0eedbb23cf4f000d1af2aa8acba91a132fceafcd1b33cf4f0e4c3f780adfef6d3b33cf4f4ee86e47fe2e6aa82ef79a7f4ee82e780e2e6fbd1af2aa7acadc3b96ea3b4bd86af2ab8bdbcc3b93cbf","buildVersion":"2.7.5_af2952a4","staticServer":"acstatic-dun.126.net","valid":1663034891140}', true, true, true);
box.defineProperty(localStorage, 'osa', '"W1gUBEuxl2CbZpj8Ir8Xvv6QnYM_ytII-1iounLC3TbuKP_GZ2VtOfZmkPsjMNn6ULb82cdIsqJ92oGtGVJsaYA="', true, true, true);
box.defineProperty(localStorage, 'search:preset_words', '{"nextRequestTime":1666797048000,"lastUpdateTime":1666796650792,"lastId":"e80881443214cb78cc1fd9b85f7c29ec","words":[{"id":"e80881443214cb78cc1fd9b85f7c29ec","type":"general","query":"三部门联合开展艺考培训专项治理","realQuery":"三部门联合开展艺考培训专项治理","weight":5,"beginTs":1666777944000,"endTs":1666864347000,"valid":1,"adCommercialJson":"","uuid":"ea6854d5-9864-47b6-b15e-f9a0b0be551c","times":2},{"id":"2f26400cc047c298959aef39a87945bb","type":"general","query":"梦天实验舱近日将实施发射","realQuery":"梦天实验舱近日将实施发射","weight":2,"beginTs":1666676513000,"endTs":1666849317000,"valid":1,"adCommercialJson":"","uuid":"9df586b6-5b3a-404e-882f-8e6f463acfef","times":4},{"id":"464aa4887a0503ce5480a08570412272","type":"general","query":"英国首相苏纳克与拜登通话","realQuery":"英国首相苏纳克与拜登通话","weight":2,"beginTs":1666745162000,"endTs":1666831565000,"valid":1,"adCommercialJson":"","uuid":"af7a93a0-ebb1-4ce4-8211-22c75108f91d","times":1},{"id":"68da5764a76cb0e546bdc0decb6f56c2","type":"general","query":"俄已通知美将举行军演","realQuery":"俄已通知美将举行军演","weight":1,"beginTs":1666752892000,"endTs":1666839294000,"valid":1,"adCommercialJson":"","uuid":"ca032473-c3fe-4026-ac36-0bfdef08624a","times":2}]}', true, true, true);
box.defineProperty(localStorage, 'YD00517437729195:WM_NIKE', '9ca17ae2e6ffcda170e2e6eeb1f467b0befa89b146ede78ba6c84b829a9bb1d45db0eca488f068939396afc62af0fea7c3b92a94b4fd84d56f97ad8fa5c53bf5afbfa4c46fb08e9dd5d168acadf8d8e450fcae8e86b87c9c8bab8cb36a97b1968ded548eb8b6a9d44a9cb7f9d4c44aadbc85a2b261fb9eb692e770b39da3b3b648b88d89d1cf498f86f8bac463f4b087aac134f49f9896f4508f998b85bb4983b99dd1f23a87f09e8ec664b5f1abd5e253ada89cd4e637e2a3', true, true, true);
box.defineProperty(localStorage, 'YD00517437729195:wm_cf', 'acstatic-dun.126.net,ac.dun.163yun.com,9ca170a1abeedba16ba1f2ac96ed26f3eafdcfe265aff1bad3ae70e2f4ee83e27fe2e6ee82e226a8aba2cfb43ef1f2ad90f025b6eee183a128e2bca4c3b92ae2f4ee8ee867e2e6fbd1af2aafbba7c3b939f4f0e4c3e26faffef6d3b328e2bdab8aa132f1f000cda161a7b3eedbb43cf0fea586ec2afaed00d1af2aa6bba3c3b93af4f4ee87e863e2e6fdd1b328e2adab8ea132f2f0e4c3f26fabfef6d4b33cf0feab8be270e2e6aa82ef79a7f4ee86e579e2e6aa82ef79a7f4ee86f679e2e6aa82ef79a7f4ee93e880e2e6ffcda169afb2eedbb128e2bda7c3b93bf4f0e4c3ee80a7b3eedbb83cf0fea195e863e2e6fdd1b328e2b3bc86f02afaeb00cda167b8bba7c3b939f4f0e4c3f366e2e6eebac73cf4ebffd8b739f5e9fedab433f7fee4c3e870a1fef695f17fa7f4ee83ef2afafeeecda163b6b0eedbb23cf4f000d1af2aa8acba91a132fceafcd1b33cf4f0e4c3f780adfef6d3b33cf4f4ee86e47fe2e6aa82ef79a7f4ee82e780e2e6fbd1af2aa7acadc3b96ea3b4bd86af2ab8bdbcc3b93cbf,2.7.5_af2952a4,2.7.5_e2891084,300000,da824b6e7f73b5f945d4236d90cf8db6,acstatic-dun.126.net::acstatic.dun.163yun.com,ac.dun.163.com::ac.dun.163yun.com,1663034891027', true, true, true);
box.defineProperty(localStorage, 'aria', '{"a3637ace5dc3a347f6863b0bac487599":{"runtime":{"appid":"a3637ace5dc3a347f6863b0bac487599"},"road":"https://static.zhihu.com/event/wza/31035/"}}', true, true, true);
box.defineProperty(localStorage, 'zap:Stash', '{"logEntries":{}}', true, true, true);
box.defineProperty(localStorage, 'YD00517437729195:WM_DID', 'Pqmlb6h2N/9EEEABFUPQWl4lgmlQMZNG__1663106591254__1663034591254', true, true, true);