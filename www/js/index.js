/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    function download(url) {
        const a = document.createElement('a')
        a.href = url
        a.download = url.split('/').pop()
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      }
      console.log("http://localhost:8001/redo_page.js")
    // https://github.com/t1st3/cordova-plugin-ping
    // var p, success, err, ipList;
    // ipList = [{ query: 'google.com', timeout: 1, retry: 3, version: 'v4' },
    // { query: 'www.google.com', timeout: 2, 'retry': 3, version: 'v6' }];
    // success = function (results) {
    //     console.log(results);
    // };
    // err = function (e) {
    //     console.log('Error: ' + e);
    // };
    // p = new Ping();
    // p.ping(ipList, success, err);


    // https://github.com/navidmalekan/cordova-plugin-ping-with-ip
    //can't instal

}
