$( document ).ready(function() {
	$("#login").submit(function(event){
		event.preventDefault();
		if (SHA1($("#username").val() + $("#password").val()) === '7ffb656468d80a52349cb05c6f6e84b1defb5c10')
		{
			var baseurl = 'https://www.dropbox.com/sh/';
			var links = [
				['2g6e92bq569dl8i/SGTKm3owD0', 'Spiren'],
				['4lzh20unk1ic78o/jNwmwdYosA', 'Lister'],
				['ybgnpj61cdqmqhq/voE3bmRxme', 'Diverse'],
				['7zew56m7vo5s4bk/SytYC3jhYs', 'Photos']
			];
			var content = '';
			for(index = 0; index < links.length; ++index)
			{
				content += '<p><a href="' + baseurl + links[index][0] + '">' + links[index][1] + '</a></p>';
			}
			$("#content").html(content);
		}
		else
		{
			$("#error").text('Brugernavn eller password er forkert.');
		}
	});
});