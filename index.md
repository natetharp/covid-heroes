---
title: COVID Heroes
description: 
layout: default
---

<section class="usa-graphic-list usa-section">
	<div class="grid-container">
		<div class="usa-graphic-list__row grid-row">
		{% for heroes in site.heroes %}
			<div class="usa-media-block">
				<img class="usa-media-block__img" src="{{ heroes.portrait | prepend: site.baseurl }}" alt="{{ heroes.title }} portrait" />
				<div class="usa-media-block__body">
					<h2 class="usa-graphic-list__heading">{{ heroes.title }}</h2>
					<h3>{{ heroes.occupation }}</h3>
					<a href="{{ heroes.url | prepend: site.baseurl }}">More</a>
					
					<p class="post-excerpt">{{ heroes.description | truncate: 160 }}</p>
				</div>
			</div>
		{% endfor %}
		
		
		
		
		</div>
	</div>
</section>
