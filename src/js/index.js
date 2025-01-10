const listaSelecaodigidevs = document.querySelectorAll(".digidev");

listaSelecaodigidevs.forEach(digidev => {
	digidev.addEventListener("click", () => {
		esconderCartaodigidev();

		const iddigidevSelecionado = mostrarCartaodigidevSelecionado(digidev);

		desativardigidevNaListagem();
		ativardigidevSelecionadoNaListagem(iddigidevSelecionado);

	})
})


function ativardigidevSelecionadoNaListagem(iddigidevSelecionado) {
	const digidevSelecionadoNaListagem = document.getElementById(iddigidevSelecionado);
	digidevSelecionadoNaListagem.classList.add("ativo");
}

function desativardigidevNaListagem() {
	const digidevAtivoNaListagem = document.querySelector(".ativo");
	digidevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaodigidevSelecionado(digidev) {
	const iddigidevSelecionado = digidev.attributes.id.value;
	const idDoCartaodigidevParaAbrir = "cartao-" + iddigidevSelecionado;
	const cartaodigidevParaAbrir = document.getElementById(idDoCartaodigidevParaAbrir);
	cartaodigidevParaAbrir.classList.add("aberto");
	return iddigidevSelecionado;
}

function esconderCartaodigidev() {
	const cartaodigidevAberto = document.querySelector(".aberto");
	cartaodigidevAberto.classList.remove("aberto");
}

