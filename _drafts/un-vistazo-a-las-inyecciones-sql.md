---
layout: post
title: "Un vistazo a las inyecciones SQL"
date: 2018-02-20 15:10:00 -0500
image:
  path: /assets/img/web-security.jpg
  rights: '"Programming Foundations: Web Security" by Kevin Skoglund'
categories: seguridad
tags: [php, seguridad web, sql]
description: La importancia de las ciencias de la computación, su influencia en el mundo moderno y todas sus áreas de estudio
comments: true
---
En el último año me he encontrado con "desarrolladores" que creen vivir en un mundo fantasioso, en el que las medidas de seguridad web no son necesarias, específicamente en el que las consultas SQL son completamente seguras.

Contrario a lo dicho anteriormente, en el mundo real cualquier persona con intenciones maliciosas, aún sin mucha experiencia en el tema, puede realizar inyecciones SQl de forma exitosa y así aludir controles de acceso, extraer información confidencial, eliminar la base de datos o en algunos casos tomar el control completo del servidor. Es por ello que las inyecciones de código ocupan el primer lugar de los 10 principales riesgos de seguridad de aplicaciones web de [OWASP](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project "Más sobre el OWASP Top 10".


## ¿Qué es una inyeccion SQL?

Se refiere a un ataque de inyección en el que un atacante puede ejecutar sentencias SQL arbitrarias al engañar a una aplicación web para que procese la entrada del atacante como parte de una consulta SQL.
