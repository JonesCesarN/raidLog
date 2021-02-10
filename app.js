function Carregar() {
    var t = document
            .getElementById("texto")
            .value.split("\n")
            .filter((t) => t.trim()),
        a = [];
    for (let e = 1; e < t.length; e++) {
        var n = t[e].split(",");
        console.log(n)

        a.push({ 
            nick: d(0), 
            id: d(1), 
            ataques: d(2), 
            titan: d(4), 
            dano_total: d(5), 
            cabeca: d(6), 

            torso: d(7), 
            torso_body: d(15), 
            torso_skeleton: d(23),

            braco_esq: d(9),
            braco_esq_body: d(17),
            braco_esq_skeleton: d(25),

            braco_dir: d(8),
            braco_dir_body: d(16),
            braco_dir_skeleton: d(24),

            mao_esq: d(11),
            mao_esq_body: d(19),
            mao_esq_skeleton: d(27),

            mao_dir: d(10),
            mao_dir_body: d(18),
            mao_dir_skeleton: d(26),

            perna_esq: d(13),
            perna_esq_body: d(21),
            perna_esq_skeleton: d(29),

            perna_dir: d(12), 
            perna_dir_body: d(20), 
            perna_dir_skeleton: d(28), 
            dano_off: 0 });
    }
    a.filter(function (t) {
        if (t.titan.includes("Jukk")) {
            var a = r(t.perna_esq) + r(t.perna_esq_body) + r(t.perna_esq_skeleton) + r(t.perna_dir) + r(t.perna_dir_body) + r(t.perna_dir_skeleton);
            t.dano_off = a;
        }
        if (t.titan.includes("Mohaca")) {
            a = r(t.torso);
            t.dano_off = a;
        }
        if (t.titan.includes("Terro")) {
            a = r(t.braco_esq) + r(t.braco_esq_body) + r(t.braco_esq_skeleton) + r(t.braco_dir) + r(t.braco_dir_body) + r(t.braco_dir_skeleton) + r(t.mao_esq) + r(t.mao_esq_body) + r(t.mao_esq_skeleton) + r(t.mao_dir) + r(t.mao_dir_body) + r(t.mao_dir_skeleton) + r(t.perna_dir) + r(t.perna_dir_body) + r(t.perna_dir_skeleton);
            t.dano_off = a;
        }
        if (t.titan.includes("Sterl")) {
            a = r(t.braco_esq) + r(t.braco_esq_body) + r(t.braco_esq_skeleton) + r(t.braco_dir) + r(t.braco_dir_body) + r(t.braco_dir_skeleton) + r(t.mao_dir) + r(t.mao_dir_body) + r(t.mao_dir_skeleton) + r(t.perna_dir) + r(t.perna_dir_body) + r(t.perna_dir_skeleton);
            t.dano_off = a;
        }
        if (t.titan.includes("Lojak")) {
            a = r(t.mao_esq) + r(t.mao_esq_body) + r(t.mao_esq_skeleton);
            t.dano_off = a;
        }
    });
    b = {};
    for (var e = 0; e < a.length; e++) b[a[e].id] = a[e].id;
    for (var i in ((arr = []), b)) arr.push(i);
    function r(t) {
        return parseFloat(t);
    }
    function d(t) {
        return n[t];
    }
    function o(t) {
        return t.toLocaleString("pt-BR");
    }
    arr.filter((t) => {
        !(function (t) {
            let n = a
                    .filter((a) => a.id == t)
                    .map((t) => r(t.dano_off))
                    .reduce((t, a) => (t += a)),
                e = a
                    .filter((a) => a.id == t)
                    .map((t) => r(t.dano_total))
                    .reduce((t, a) => (t += a)),
                i = a.filter((a) => {
                    if (a.id == t) return a.nick;
                })[0].nick,
                d = a.filter((a) => {
                    if (a.id == t) return a.nick;
                })[0].ataques;
            var s = parseFloat((100 * n) / e).toFixed(2) + "%",
                f = document.getElementById("resultado"),
                l = document.createElement("tr");
            f.appendChild(l),
                (l.innerHTML = ""),
                (l.innerHTML += `\n                <td class='name'>${i}</td>\n                <td class='id'>${t}</td>\n                <td class='ataques'>${d}</td>\n                <td class='DanoTotal'>${o(
                    e
                )}</td>\n                <td class='danoOff'>${o(n)}</td>\n                <td class='percentOff'>${s}</td>\n                `);
        })(t);
    });
    var s = document.getElementById("minAtq").value,
        f = document.getElementById("minOff").value;
    $(".percentOff").each(function () {
        r(this.innerHTML) > f && ($(this).addClass("off"), $(this).siblings(".name").addClass("off"));
    }),
        $(".ataques").each(function () {
            r(this.innerHTML) < s && ($(this).addClass("off"), $(this).siblings(".name").addClass("off"));
        });
}
