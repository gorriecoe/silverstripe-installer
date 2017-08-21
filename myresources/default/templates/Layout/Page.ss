<div class="main-section">
	<div class="row">
		<div class="column">
			<main class="main">
				<% if Title %>
					<h1 class="main-title">
						{$Title}
					</h1>
				<% end_if %>
				<% if Content %>
					<div class="main-content">
						{$Content}
					</div>
				<% end_if %>
				<% if Form %>
					<div class="main-form">
						{$Form}
					</div>
				<% end_if %>
			</main>
		</div>
	</div>
</div>
