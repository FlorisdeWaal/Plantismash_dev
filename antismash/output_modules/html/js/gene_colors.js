var gene_colors = [
  { label: "Cytochrome 450", color: "#D50000", members : ["plants/p450"] },
  { label: "Terpene synthase", color: "#35F800", members : ["plants/Terpene_synth", "plants/Terpene_synth_C", "plants/SQHop_cyclase_C", "plants/SQHop_cyclase_N", "plants/Lycopene_cycl"] },
  { label: "Copper amine oxidase", color: "#E9C63E", members : ["plants/Cu_amine_oxid"] },
  { label: "Pictet-Spengler enzyme (Bet v1)", color: "#735100", members : ["plants/Bet_v_1"] },
  { label: "Glycosyltransferase", color: "#F477A6", members : ["plants/Glycos_transf_1", "plants/Glycos_transf_2", "plants/Glyco_transf_28", "plants/UDPGT", "plants/UDPGT_2"] },
  { label: "Ketosynthase", color: "#75FFD8", members : ["plants/Chal_sti_synt_C", "plants/Chal_sti_synt_N"] },
  { label: "Squalene epoxidase", color: "#206B14", members : ["plants/SE"] },
  { label: "COesterase", color: "#A221FF", members : ["plants/COesterase"] },
  { label: "Methyltransferase", color: "#CF0FFF", members : ["plants/Methyltransf_2", "plants/Methyltransf_3", "plants/Methyltransf_7", "plants/Methyltransf_11", "plants/cMT", "plants/nMT", "plants/oMT"] },
  { label: "BAHD acyltransferase", color: "#0003EC", members : ["plants/Transferase"] },
  { label: "Scl acyltransferase", color: "#2935E2", members : ["plants/Peptidase_S10"] },
  { label: "Epimerase", color: "#F245BD", members : ["plants/Epimerase"] },
  { label: "Oxidoreductase", color: "#40D885", members : ["plants/adh_short", "plants/adh_short_C2", "plants/NAD_binding_1", "plants/GMC_oxred_N", "plants/GMC_oxred_C"] },
  { label: "Dioxygenase", color: "#F5B2FF", members : ["plants/DIOX_N", "plants/2OG-FeII_Oxy"] },
  { label: "Transporter", color: "#060808", members : [] },
  { label: "CoA-ligase", color: "#8F400B", members : ["plants/AMP-binding"] },
  { label: "Amino oxidase", color: "#2C113A", members : ["plants/Amino_oxidase"] },
  { label: "Aminotransferase", color: "#E42E00", members : ["plants/Aminotran_1_2", "plants/Aminotran_3"] },
  { label: "Prenyltransferase", color: "#552288", members : ["plants/Prenyltrans", "plants/Prenyltransf", "plants/UbiA"] },
  { label: "Strictosidine synthase-like", color: "#dd71dd", members : ["plants/Str_synth"] },
  { label: "PRISE enzymes", color: "#13C600", members : ["plants/PRISE"] },
  { label: "Dirigent enzymes", color: "#606000", members : ["plants/Dirigent"] },
  { label: "Cellulose synthase-like", color: "#009115", members :  ["plants/Cellulose_synt"]},
  { label: "Fatty acid desaturase", color: "#ef900b", members : ["plants/FA_desaturase", "plants/FA_desaturase_2"]},
  { label: "Lipoxygenase", color: "#071daf", members : ["plants/Lipoxygenase"] },
  { label: "Polyprenyl synthetase", color: "#ffa83f", members : ["plants/polyprenyl_synt"] }
];

function get_gene_color(orf) {
	var color = "gray";
	var newColor = false;
	if (orf.hasOwnProperty("domains") && orf["domains"].length > 0) {
		var domain = orf["domains"][0];
		for (var i = 0; i < gene_colors.length; i++) {
			var elm = gene_colors[i];
			if (elm.members.indexOf(domain) >= 0) {
				color = elm.color;
				newColor = true;
				break;
			}
		}
	}
	if (!newColor) {
		if (orf["type"] == "biosynthetic") {
			color = "#810e15";
		}
	}
	return color;
}

function get_legend_obj(orf) {
	var legobj = null;
	if (orf.hasOwnProperty("domains") && orf["domains"].length > 0) {
		var domain = orf["domains"][0];
		for (var i = 0; i < gene_colors.length; i++) {
			var elm = gene_colors[i];
			if (elm.members.indexOf(domain) >= 0) {
				legobj = elm;
				break;
			}
		}
	}
	return legobj;
}