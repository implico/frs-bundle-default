<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
    <meta charset="utf-8" />
    <title>{% block headTitle %}{% endblock %}</title>
    <link rel="shortcut icon" href="img/favicon.ico" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="viewport" content="user-scalable=0,width=device-width,initial-scale=1,maximum-scale=1" />
    
    <meta property=og:url content="">
    <meta property=og:title content="">
    <meta property=og:description content="">
    <meta property=og:image content="">
    
    <link rel="stylesheet" href="css/style.css" />
      
  </head>
    
  <body class="body">

    <div class="body__container">

      {% include "partials/header.swig" %}

      <main class="main">
        {% block content %}{% endblock %}
      </main>

      {% include "partials/footer.swig" %}

    </div>

    {# 
        Use when config.js.common.concatVendorApp is false
        <script src="js/app.vendor.js"></script>
    #}
    <script src="js/app.js"></script>
  </body>
</html>
