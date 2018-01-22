---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: homepage
title: Stop Bullying Tour
description: "Description for the website."
---

<!-- HOME -->
<section class="bg-img-1">
	<div class="container">
		<div class="row">
			<div class="col-md-4 col-md-offset-8 col-sm-5 col-sm-offset-1 col-xs-12">
				<div class="home-wrapper text-center">
				<span class="hp-logo"><img src="{{ site.baseurl }}/img/stop-bullying-logo.png" alt="" class="pic-animate-in" /></span>
				<h1>Stop Bullying Tour</h1>
				<h3>Taking the Solution on the Road</h3>
				<div class="intro">
					<h3 class="text-center"><a href="http://donate.com" class="topbar" target="_blank">DONATE</a></h3>
				</div>
				</div>
			</div>
		</div>
	</div>
</section>


<section>
	<div class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
				<h2>The Facts</h2>
				<ul class="statistics">
				  <li class="style1">
				    <span class="icon fa fa-line-chart"></span>
				    <strong>3.2M</strong> students a Year get bullied
				  </li>
				  <li class="style3">
				    <span class="icon fa fa-bar-chart"></span>
				    <strong>160K</strong> teens skip school every day
				  </li>
				  <li class="style6">
				    <span class="icon fa fa-clock-o"></span>
				      <span style="display:block;font-size:1em;">Every</span>
				      <strong>7 Minutes</strong> a child is bullied.
				  </li>
				  <li class="style4">
				    <span class="icon fa fa-percent font1_1"></span>
				    <strong>71%</strong> of students report incidents of bullying
				  </li>
				  <li class="style5">
				    <span class="icon fa fa-frown-o"></span>
				    <strong>1/10</strong> drop out of school because of repeated bullying
				  </li>
				</ul>
			</div>
		</div>
	</div>
</section>



<section class="style6">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
				<h2>Our Efforts</h2>
				<ul class="features">
					<li>
						<span class="icon major style4 fa fa-music"></span>
						<h3>SBT Hubs</h3>
						<p>The SBT Hub will have a presence in the local community school and we will engage students in activities such as essays contest, arts, plays and music to give them an outlet to express themselves.</p>
					</li>
					<li>
						<span class="icon major style3 fa fa-hand-peace-o"></span>
						<h3>Bullying 101</h3>
						<p>Bullying 101 brings together the community with experts to educate them on all aspects of bullying including identifying the issues and situation that contribute to the birth of "The Bully".</p>
					</li>
					<li>
						<span class="icon major style5 fa fa-building-o"></span>
						<h3>The Den</h3>
						<p>(Conflict and Resolutions Center)<br>The Den is a conflict resolution program that brings resources to schools and the local community to help educate and gives tools and solutions to both the bully and the bullied.</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>


<!-- About Us -->
<section>
  <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
          <h2 class="title" data-wow-delay=".1s"><span class="active-text">Our Past Projects</span></h2>
        </div>
      </div>
  </div>
    <div class="container">
		{% for post in site.posts %}
		  {% capture modulo %}{{ forloop.index0 | mod:3 }}{% endcapture %}
		  {% if modulo == '0' or forloop.first %}
		    <div class="row">
		  {% endif %}
		    <!-- don't forget those pesky 'alpha' and 'omega' tags if they're in there -->
		    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
		    	<a href="{{ post.url }}"><img src="img/outting-3.jpg" alt="Outting 1" class="img-responsive img-rounded"/></a>
            	<p><a href="{{ post.url }}">Trip to a Music Studio</a></p>
		    </div>
		  {% if modulo == '2' or forloop.last %}
		    </div>
		  {% endif %}
		{% endfor %}
    </div>
</section>
<!-- END About Us -->

