---
title: COVID Heroes
description: A memorial to those that have lost their lives fighting the COVID-19 pandemic.
layout: default
---

<section class="usa-section usa-section--dark">
	<div class="grid-container">
		<div class=" grid-row grid-gap">
			<div class="tablet:grid-col-4">
			<h2 class="font-heading-xl margin-top-0 tablet:margin-bottom-0">Highlighting the heroes among us</h2>
			</div>
			<div class="tablet:grid-col-8 usa-prose">
			<p>Throughout this crisis, around the world, there are nurses, doctors and healthcare providers of all stripes that put their life on the lives at risk to help save members of the public. Everyone should know their names.</p>
			</div>
		</div>
	</div>
</section>

<section class="usa-graphic-list usa-section">
	<div class="grid-container">
		<div class="grid-row">
		
		{% for heroes in site.heroes %}
			<div class="usa-media-block tablet:grid-col-6 margin-bottom-3">
				
				{% if heroes.portrait %}
				<img class="usa-media-block__img" src="/assets/img/{{ heroes.portrait | prepend: site.baseurl }}" alt="{{ heroes.title }} portrait" />
				{% else %}
				<img class="usa-media-block__img" src="{{ "/assets/img/circle-124.png" | relative_url }}" alt="" />
				{% endif %}
				
				<div class="usa-media-block__body">
					<h2 class="usa-graphic-list__heading">{{ heroes.title }}</h2>
					<p class="margin-y-05 line-height-sans-3"><em><small>{{ heroes.occupation }}{% if heroes.employer %}, {{ heroes.employer }}{% endif %}</small></em></p>
					<p class="margin-y-05"><small><a href="{{ heroes.url | prepend: site.baseurl }}">Read More</a></small></p>
					
					<p class="post-excerpt">{{ heroes.description | truncate: 160 }}</p>
				</div>
			</div>
		{% endfor %}		
		
		</div>
	</div>
</section>
