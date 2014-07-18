---
layout: post
title: "Mobile Blogging With Jekyll"
date: July 19th, 2014
tags: ['web', 'jekyll', 'github', 's3', 'ios', 'mobile']
---

I’ve been a fan of [Jekyll](http://jekyllrb.com/ "Jekyll") for a little while now and would usually self-host any sites on the likes of Digital Ocean but this always posed an issue when it came to posting to the site from mobile. Trying to hook into my build process from mobile and Rsync things over to my Droplet seemed pretty impossible. So, in an attempt to set up a simple mobile process, I decided to host this blog using [GitHub Pages](https://pages.github.com/ "GitHub Pages").

Before covering the deployment itself, let me cover my standard process for when at my desktop. I’m using [Grunt](http://gruntjs.com/ "Grunt") to build files for deployment, including my preprocessing, image optimisation and everything else needed. Jekyll can do some of this by itself so using Grunt isn’t a requirement but it’s what I usually use and I’m most comfortable with. So to hook Jekyll’s build task into Grunt, I’m using [this plugin](https://github.com/dannygarcia/grunt-jekyll "Jekyll Plugin For Grunt") so Jekyll is built in the same task. So from composing a post or working on the design, everything is processed and ready to go by simply running the following:

```
$ Grunt build
```

Which is registered to run the following tasks in a row:

```
grunt.registerTask('build', ['sass', 'cssmin', 'jekyll:dev', 'clean:tmp']);
```

From there, my Sass is processed into CSS and minified, Jekyll is built and any temporary files removed. Deployment is then just a matter of pushing commits back to [the repository](https://github.com/davemcnally/davemcnally.github.io "This Blog's Repository"). That’s all well and good but what about mobile? That was main point of this process!

Enter [Octopage](https://itunes.apple.com/gb/app/octopage-blogging-jekyll-markdown/id649843345?mt=8 "Octopage In App Store") and [AirFile](https://itunes.apple.com/us/app/airfile/id560145740 "AirFile In App Store"). Don’t let the name fool you, Octopage may sound like it requires [Octopress](http://octopress.org/ "Octopress") but it works perfectly well with standard Jekyll sites too — Octopage lets you connect to your GitHub account and manage your GitHub Pages repository, including creating new posts and even supports drafts. I’m using AirFile to access and upload to an Amazon S3 bucket. Having access to the Camera Roll, this enables me to post any images along with text and works pretty well.

Simpler than you thought it would be? Yeah, once you know those apps exist and what they’re called, this process is as simple as setting them up! I’m glad I finally have a workflow setup to allow publishing from anywhere which is pretty good for posting fishing photos as I get them! Just don’t forget to pull repo changes when back at the desktop — remember publishing from mobile is still creating commits which you won’t have locally until pulled down. Now go forth and blog!