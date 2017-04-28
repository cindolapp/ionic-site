---
layout: "fluid/docs_base"
version: "3.6.1"
versionHref: "/docs/native"
path: ""
category: native
id: "flurry-analytics"
title: "Flurry Analytics"
header_sub_title: "Class in module "
doc: "Flurry Analytics"
docType: "class"
---

<h1 class="api-title">Flurry Analytics</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/flurry-analytics/index.ts#L72">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add --save cordova-plugin-flurryanalytics
$ npm install --save @ionic-native/flurry-analytics
</code></pre>
<p>Repo:
  <a href="https://github.com/blakgeek/cordova-plugin-flurryanalytics.git">
    https://github.com/blakgeek/cordova-plugin-flurryanalytics.git
  </a>
</p>


<p>This plugin connects to Flurry Analytics SDK</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Browser</li>
</ul>






<h2>Usage</h2>
<pre><code>import { FlurryAnalytics } from &#39;ionic-native/flurry-analytics&#39;;

constructor(private flurryAnalytics: FlurryAnalytics) { }

...

constant options: FlurryAnalyticsOptions = {
 reportSessionsOnClose: true,
 enableLogging: true
}

FlurryAnalytics.init(&#39;12345678965412303214&#39;, options)
  .then((something: any) =&gt; doSomething(something))
  .catch((error: any) =&gt; console.log(error));
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="init" href="#init"></a><code>init(appKey,&nbsp;options)</code></h3>


Set the setting for Flurry Analytics
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      appKey</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>API key is required</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>FlurryAnalyticsOptions</code>
    </td>
    <td>
      <p>is optional</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="logEvent" href="#logEvent"></a><code>logEvent(eventName,&nbsp;params)</code></h3>




This function set the Event
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      eventName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The param to configure name of Event</p>
</td>
  </tr>
  
  <tr>
    <td>
      params</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>optional</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when event is set
</div><h3><a class="anchor" name="startTimedEvent" href="#startTimedEvent"></a><code>startTimedEvent(eventName,&nbsp;params)</code></h3>




This function start a timed event
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      eventName</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      params</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>optional</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when timed event is started tracking
</div><h3><a class="anchor" name="endTimedEvent" href="#endTimedEvent"></a><code>endTimedEvent(eventName,&nbsp;params)</code></h3>




This function complete a timed event
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      eventName</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      params</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>optional</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when timed event is ended tracking
</div><h3><a class="anchor" name="logError" href="#logError"></a><code>logError(code,&nbsp;message)</code></h3>




This function log an error
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      code</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      message</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="logPageView" href="#logPageView"></a><code>logPageView()</code></h3>


This function log a page view


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setLocation" href="#setLocation"></a><code>setLocation(location)</code></h3>




This function set the location for the event
(this is will only be used for very course grained statistics like city)
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      location</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="startSession" href="#startSession"></a><code>startSession()</code></h3>


This function start the session
Only needed for older versions of Android


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="endSession" href="#endSession"></a><code>endSession()</code></h3>


This function end the session
Only needed for older versions of Android


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="FlurryAnalyticsOptions" href="#FlurryAnalyticsOptions"></a>FlurryAnalyticsOptions</h2>

<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      appKey
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Flurry API key is required</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      version
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Overrides the version of the app</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      continueSessionSeconds
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>How long can the app be paused before a new session is created,
must be less than or equal to five for Android devices</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      userId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set id of the user</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      gender
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set gender of the user
Valid values are &quot;m&quot;, &quot;M&quot;, &quot;f&quot; and &quot;F&quot;</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      age
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Set age of the user</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      logLevel
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set error for log
Values: VERBOSE, DEBUG, INFO, WARN, ERROR</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      enableLogging
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Defaults to false</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      enableEventLogging
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Should every event show up the app&#39;s log, defaults to true</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      enableCrashReporting
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Should app crashes be recorded in flurry, defaults to false, iOS only</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      enableBackgroundSessions
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Should the session continue when the app is the background, defaults to false, iOS only</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      reportSessionsOnClose
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Should data be pushed to flurry when the app closes, defaults to true, iOS only</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      reportSessionsOnPause
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Should data be pushed to flurry when the app is paused, defaults to true, iOS only</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="FlurryAnalyticsLocation" href="#FlurryAnalyticsLocation"></a>FlurryAnalyticsLocation</h2>

<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      latitude
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      longitude
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      verticalAccuracy
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Set altitude
It is optional and use only for iOS</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      horizontalAccuracy
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Set radius about 2d point
It is optional and use only for iOS</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>




