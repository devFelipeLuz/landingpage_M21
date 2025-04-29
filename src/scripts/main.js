$(document).ready(function () {
    // Quando um botão de filme for clicado...
    $('.filme-btn').click(function () {
        const filmeSelecionado = $(this).data('filme'); // pega o valor do data-filme clicado

        // Remove a classe 'active' de todos os botões e adiciona no botão clicado
        $('.filme-btn').removeClass('active');
        $(this).addClass('active');

        // Esconde todos os conteúdos dos filmes
        $('.movies__conteudo').hide();

        // Mostra o conteúdo do filme clicado
        $(`.movies__conteudo[data-filme="${filmeSelecionado}"]`).show();

        // Faz o submenu recolher e reaparecer com animação
        $('.movies__submenu').slideUp(200, function () {
            $('.movies__submenu').slideDown(200);
        });

        // Define a aba "Sobre" como padrão toda vez que um filme for trocado
        $('.submenu-btn').removeClass('submenu-active');
        $('.submenu-btn[data-tab="sobre"]').addClass('submenu-active');

        // Esconde todas as abas internas (sobre e elenco)
        $('.movies__conteudo__sobre').hide();
        $('.movies__conteudo__elenco').hide();

        // Mostra apenas a aba "sobre" do filme clicado
        $(`.movies__conteudo[data-filme="${filmeSelecionado}"] .movies__conteudo__sobre`).show();
    });

    // Quando uma aba de submenu for clicada...
    $('.submenu-btn').click(function () {
        const abaSelecionada = $(this).data('tab'); // sobre ou elenco
        const filmeAtivo = $('.filme-btn.active').data('filme'); // qual filme está ativo

        // Troca a aba ativa visualmente
        $('.submenu-btn').removeClass('submenu-active');
        $(this).addClass('submenu-active');

        // Esconde todas as abas internas do filme atual
        $(`.movies__conteudo[data-filme="${filmeAtivo}"] .movies__conteudo__sobre`).hide();
        $(`.movies__conteudo[data-filme="${filmeAtivo}"] .movies__conteudo__elenco`).hide();

        // Exibe a aba correspondente (sobre ou elenco)
        $(`.movies__conteudo[data-filme="${filmeAtivo}"] .movies__conteudo__${abaSelecionada}`).fadeIn();
    });
});
