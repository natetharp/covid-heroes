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
			<p><strong>{{ site.heroes | size }}</strong> healthcare workers have given their lives in the fight against Coronavirus, as of {{ site.time | date: '%B %-d' }}. They're listed here in hopes that their sacrifices will never be forgotten.</p>
			</div>
		</div>
	</div>
</section>




<section class="usa-graphic-list usa-section">
	<div class="grid-container">
		<div class="grid-row">
		
		{% include hero-portrait.html %}		
		
		</div>
	</div>
</section>
