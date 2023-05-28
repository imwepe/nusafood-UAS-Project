import React, { useEffect } from "react";
import "./parallax.css";

function Parallax() {
  useEffect(() => {
    const handleScroll = () => {
      const indonesia = document.getElementById("indonesia");
      const makanan = document.getElementById("makanan");
      let value = window.scrollY;

      indonesia.style.left = value * -2 + "px";
      makanan.style.top = value * -1 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <header>
        <h2 className="logo">nusantara.</h2>
        <nav className="navbar">
          <a href="#" className="active">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Places</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <section className="parallax">
        <img src="" id="makanan" alt="makanan" />
        <img
          src="—Gambarpng—vektor bendera indonesia yang vektor_1439 (1).png"
          id="indonesia"
          alt="indonesia"
        />
      </section>

      <section className="sec">
        <h2>Indonesia</h2>
        <h2>Isi apa aja</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
          praesentium impedit hic aut in sunt fugiat incidunt numquam quibusdam
          dolores odio nihil saepe, totam dolore blanditiis deserunt reiciendis
          quasi alias!
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          sint, ex dolorem nemo aspernatur velit a mollitia magnam temporibus
          eum suscipit quidem nulla blanditiis ab ratione praesentium maiores
          unde corporis.
        </p>
        <br />
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi beatae
          rerum illum. Vitae cupiditate vel accusantium reprehenderit dolores
          nesciunt voluptate nihil, tempora nobis odit, eum architecto a
          eligendi consequatur unde. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Aliquid quas consequatur incidunt reiciendis
          pariatur provident iusto nam maxime inventore tempora ut error qui,
          sunt culpa laboriosam commodi. Atque nobis exercitationem recusandae
          voluptas nihil in distinctio eaque sit eveniet unde maxime nemo,
          expedita architecto laborum dolorum consequatur? Voluptatibus facere
          est rerum voluptates velit in vitae nam molestias perferendis, modi
          natus non nihil. Architecto dignissimos labore adipisci quisquam in
          magni accusamus cupiditate alias, aperiam deleniti sint, ut quasi
          sequi quidem doloremque at pariatur. Possimus voluptas cupiditate
          nostrum odio praesentium provident perferendis ipsa quos quisquam amet
          esse perspiciatis expedita explicabo eius incidunt, ducimus quam eos
          distinctio voluptatum, fuga dolore dolor repellat similique.
          Blanditiis tempora reprehenderit repudiandae accusantium, delectus
          libero officiis sapiente eos ipsum et dolorem similique obcaecati
          molestias debitis aliquid aperiam consequuntur laborum repellat,
          nostrum illum pariatur tempore nam. Explicabo sed cum earum, maiores
          eius in dolor, fuga aperiam excepturi provident hic nulla. Consectetur
          ut facere quaerat fuga alias quam, laudantium cum necessitatibus
          deserunt suscipit temporibus eligendi saepe consequatur, odio eum est
          nihil vitae possimus itaque illum obcaecati ducimus eveniet velit
          cupiditate. Quae quidem provident earum dolor veritatis similique
          odit, in ducimus officiis rerum quaerat debitis reprehenderit maxime
          eligendi sint nisi placeat rem ratione perferendis. Doloribus,
          aspernatur similique! Placeat fugit beatae deleniti quisquam,
          similique ex maxime libero alias consectetur voluptatem, repellendus
          harum. Atque pariatur, nam quasi fugit repellendus fugiat eaque quo
          sunt architecto vero optio numquam earum ullam magni alias temporibus
          aut veritatis veniam quaerat explicabo eveniet harum modi ut sequi?
          Debitis eum dolore harum laboriosam, quia dolorem voluptatum
          doloremque laudantium eaque sit, nulla necessitatibus aut facilis!
          Nihil, inventore optio. Animi qui repellendus aperiam voluptatem
          commodi iusto architecto quaerat assumenda provident rem deserunt
          eveniet voluptatibus veniam, et fugit quis nam amet natus ipsa!
          Repudiandae voluptatem atque quidem exercitationem voluptas, eius
          minima temporibus reiciendis laborum sit molestiae neque itaque
          veritatis quae delectus ipsum voluptatum suscipit error quos iusto
          quod voluptates! Ad earum itaque perferendis quod, commodi accusantium
          sed vero maiores nesciunt dolorem placeat est debitis dignissimos illo
          odio repudiandae obcaecati quae beatae repellendus cumque iste.
          Repellat blanditiis pariatur veniam exercitationem modi deleniti.
          Aperiam iste quae laudantium necessitatibus inventore porro corporis
          maxime doloremque alias facere repudiandae assumenda vitae, minus
          ipsam dolor. Voluptas vero provident, quam veniam magni accusantium
          dolores dolorum velit exercitationem, tenetur assumenda ab quisquam
          recusandae reprehenderit, sapiente beatae placeat iusto eos eum
          dignissimos ut repudiandae. Cumque, distinctio, iure voluptate
          incidunt provident mollitia fugit magnam perspiciatis, accusantium
          deserunt expedita? Quaerat deserunt dignissimos asperiores expedita
          suscipit? Voluptas, voluptatem? Cupiditate, aspernatur animi, et
          veniam distinctio hic reprehenderit aliquam harum nihil, explicabo
          earum non nulla. Dolore impedit dignissimos magni vero reiciendis
          deserunt temporibus eaque, ullam aspernatur possimus culpa veritatis
          tempore amet consectetur facilis iure atque molestias? Voluptatum sunt
          accusantium nobis at, veritatis deserunt aspernatur ex dolorem iste
          quis enim quaerat obcaecati. Sint consequatur nemo architecto, impedit
          ea non natus unde cupiditate aspernatur exercitationem alias! Deleniti
          porro illum neque temporibus ipsa vitae! Magni, veniam quas tenetur
          dignissimos libero, perferendis vel, non ut delectus reprehenderit
          iste temporibus nesciunt? Deleniti inventore quas aliquid dicta harum,
          nisi quidem enim quam culpa aliquam adipisci praesentium omnis ipsam
          expedita aperiam officia consequuntur pariatur beatae. Iure, dolor
          libero maxime laudantium mollitia laboriosam debitis ipsum. Quam
          necessitatibus ullam, tenetur quos laboriosam ipsa voluptatibus
          facilis autem. Culpa debitis ab reiciendis nobis dolore harum quia,
          minima quod fuga expedita sapiente perferendis, id molestiae vero
          distinctio, ducimus modi ullam? Vel fugiat dolores quam totam error
          iure nihil, soluta, nesciunt at quidem ut illum amet eveniet dicta
          accusamus nam quo, neque nulla iusto. Ducimus tempora vero accusamus,
          at ipsa praesentium eius saepe. Accusamus distinctio eius sit eveniet,
          repellat laudantium nulla eos nostrum iure fuga corporis laborum natus
          qui officiis, facilis, saepe debitis velit architecto quasi illum eum.
          Unde, commodi numquam. Eum laborum magni doloribus illo esse similique
          praesentium ipsa itaque officiis provident nostrum maiores distinctio
          commodi quam ex sint, veritatis cupiditate? Pariatur rerum enim
          voluptatum dolores beatae nisi odit tempore, voluptatem architecto
          illo. Sint neque dolores, nemo necessitatibus excepturi, iure eos
          animi unde quaerat sapiente at! Ipsa distinctio porro praesentium. Id
          dolorem, enim excepturi sit numquam pariatur autem, quas ratione neque
          alias explicabo. Ab dignissimos quos aliquid deserunt, eaque non
          saepe, quasi reprehenderit eos sint distinctio error pariatur officiis
          natus quisquam tenetur? Aliquam possimus neque quas! Dolores similique
          alias quisquam quas incidunt voluptate! Earum cupiditate commodi nulla
          magnam necessitatibus amet dolores vel eum! Temporibus dicta quaerat
          deleniti incidunt suscipit enim culpa illum, ea officia error in
          sapiente omnis aperiam accusamus harum nulla amet distinctio qui.
          Porro, alias nulla eligendi veniam sapiente earum, molestias excepturi
          nostrum similique expedita ipsum vel sit maxime tempora atque
          accusantium, commodi veritatis fugit. Ex, ad accusantium unde alias
          quas suscipit laborum officiis mollitia accusamus voluptatem quisquam
          exercitationem illo eaque aliquid earum libero deleniti! Repellat illo
          id ullam obcaecati doloremque accusamus totam aut tempore magnam quod,
          voluptatibus hic est cumque eos praesentium qui modi enim a ad
          dolores. Saepe assumenda quis totam animi nisi repudiandae sit,
          deleniti quia minus! Rem expedita quam recusandae et facilis odit
          rerum harum deserunt temporibus, atque quia ea saepe iste tempore
          dignissimos laudantium hic nobis assumenda, sapiente facere maxime
          commodi eaque maiores? Quae, assumenda repellendus tempore et cum
          dignissimos mollitia dolore vel aperiam natus. Saepe nostrum officia
          facilis veniam, nam possimus unde dolores. Impedit voluptate, unde
          enim obcaecati odit maiores eveniet eius exercitationem nesciunt
          quaerat dolore ipsum delectus iure at amet maxime, id, molestias
          repellat minima. Autem officia laboriosam incidunt magni? Corrupti
          temporibus officiis neque possimus iure perspiciatis numquam, non
          molestiae repellendus quam quidem unde rerum voluptatem debitis
          consequatur autem. Vero, veniam quia aspernatur assumenda unde ipsum
          ut ab illum eligendi et tempora! Vitae reiciendis minus rem tempore ab
          delectus ipsam non excepturi sint. Voluptates similique iusto amet,
          ullam vitae itaque modi. Ab illum ipsum iste sequi. Nesciunt sapiente
          minima cupiditate nobis ab cum perspiciatis ipsam non nemo accusamus.
          Hic perferendis deleniti nostrum quasi recusandae sed debitis, qui,
          magnam tempora explicabo nemo, sequi dicta fuga sint nam quas nulla.
          Voluptatibus quidem libero dolores pariatur molestiae officia
          voluptatem recusandae amet doloremque sapiente.
        </p>
      </section>
    </div>
  );
}

export default Parallax;
