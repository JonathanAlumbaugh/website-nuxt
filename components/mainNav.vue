<template>
<nav class="navbar navbar-toggleable-md navbar-light">
	<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
				</button>
	<div class="centered">
		<div class="collapse navbar-collapse" id="navbarExample">
			<ul class="navbar-nav">
				<li class="nav-item active">
					<nuxt-link class="nav-link active" exact to="/">home</nuxt-link>
				</li>
				<li class="nav-item">
					<nuxt-link class="nav-link" to="/about">about</nuxt-link>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-toggle="modal" data-target="#contact">contact</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
</template>
