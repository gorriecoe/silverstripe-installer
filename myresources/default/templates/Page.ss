<!doctype html>
<html class="no-js" lang="en">
<head>
	<% base_tag %>
	<title>
		<% if $MetaTitle %>
			{$MetaTitle}
		<% else %>
			{$Title}
		<% end_if %> &raquo; {$SiteConfig.Title}
	</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	$MetaTags()
	<% require themedCSS('app') %>
</head>
<body class="{$ClassName}">
	{$Layout}
</body>
</html>
