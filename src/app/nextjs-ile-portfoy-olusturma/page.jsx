import Link from "next/link";

const BlogPage = () => {
    return (
        <div className="h-1/2 flex-col font-bold justify-center text-white text-justify px-8">
            <h1 className="text-3xl pb-8">Next.js ile Portföy Oluşturma</h1>
            <h2 className="text-white text-2xl">Neden Portfolyo Oluşturmalıyım</h2>
            <h3 className="font-light">
                Portfolyolar kendi yeteneklerimizi insanlara göstermek için en güzel yollardan biridir.
                İşverenler ve müşterilerin sizi tanımasında önemli rol oynarlar. Kendimiz hakkındaki önemli bilgileri,
                geçmiş projeleri, tecrübelerimizi göstermemize yardımcı olur. Bu nedenlerden dolayı, herhangi bir alanda çalışan biri için portföy oluşturmak oldukça önemlidir.
            </h3>
            <h2 className="text-white text-2xl pt-3">Neden Nextjs</h2>
            <p1 className="font-light">Next.js, geliştiricilere hızlı ve verimli bir şekilde çalışma imkanı sağlar.
                Hızlı başlangıç için hazır bir yapı sunar ve kodunuzu kolayca düzenlemenize olanak tanır.
                Bu, portföyünüzü hızlı bir şekilde oluşturmanıza ve güncellemenize olanak sağlar.</p1>
            <h2 className="text-white text-2xl pt-3">Başlangıç</h2>
            <p1 className="font-light">İlk önce nodejs yüklemeliyiz şu siteden:</p1>
            <Link href="https://nodejs.org/en" className="italic"> nodejs.</Link>
            <p1 className="font-light"> Daha Sonra terminale &apos;npm create-next-app&apos; yazıp projeyi oluşturabiliriz.
                Bunları yaptıktan sonra gerekli kütüphaneleri &apos;npm i&apos; ile indirmemiz gerekiyor.
                Bu işlem biraz sürebilir. İndirmeler tamamlandıktan sonra terminale &apos;npm run dev &apos; yazarak development serverımızı kurabiliriz.
            </p1>
            <h2 className="text-white text-2xl pt-3">Components</h2>
            <p1 className="font-light">Componentlarda bir tane Navbar componentı var.
                Navbar sayfalar arası navigasyonu sağlıyor. Navbarda her sayfanın linkleri,
                ana sayfa logosu, benim Github ve Linkedin hesaplarımın logoları ve linkleri var</p1>
            <h2 className="text-white text-2xl pt-3">Sayfalar</h2>
            <p>Ana Sayfa</p>
            <p className="font-light">Ana sayfa her sitenin başlangıç sayfasıdır. Genel bilgileri göstermek için kullanabilirsiniz.
                Ana sayfada portföyüme erişebileceğiniz &apos;View My Work&apos; butonu ve iletişime geçebileceğiniz &apos;Contact&apos; butonu var.</p>
            <p>Blog Sayfası</p>
            <p className="font-light">Blog sayfası bilgilerimizi paylaşabileceğimiz, düşüncelerimizi aktarabileceğimiz blog sayfası. Yazdığım bloglara erişebileceğiniz linkler bu sayfada. </p>
            <p>Portfolio Sayfası</p>
            <p className="font-light">Portfolio sayfası yaptığımız projeleri göstermek için kullabileceğimiz bir sayfa.
                Ben önceden yaptığım projeyi tanıtan Youtube videosu koydum. </p>
            <p>Hakkında Sayfası</p>
            <p className="font-light">Hakkında sayfası sitenizin en önemli sayfalardan biri.
                Kendinizi diğer insanlara tanıtabileceğiniz, bilgilerinizi gösterebileceğiniz, geçmiş tecrübelerinizi aktarabileceğiniz sayfa.
                Ben bu sayfaya özgeçmişimi ve kendimi anlatan bir yazı yazdım.</p>
            <p>İletişim Sayfası</p>
            <p className="font-light">İletişim sayfası sitenize giren kişilerin sizinle iletişime geçmesi için gereken araçları verebileceğiniz bir sayfa.
                Ben bu sayfaya bir email gönderen bir araç geliştirmeyi planlıyorum.</p>
            <h2 className="text-white text-xl pt-3">Yayınlama</h2>
            <p className="font-light">Kodu Github&apos;a attıktan sonra Vercel platformuyla sitemizi yayınlayabiliriz.
                İlk olarak Vercel hesabımızı github hesabımızla birleştirmemiz gerekiyor.
                Daha sonra Github repositorymizi içe aktardıktan sonra kolay bir şekilde Vercel&apos;de yayınlayabiliriz.</p>
            <Link href="https://harun-portfolio.vercel.app/" className="pr-20">Buradan Websitesine</Link>
            <Link href="https://github.com/aharunu/Harun-Portfolio">Buradab Github Repositorysine</Link>
            <p className="font-light">ulaşabilirsiniz.</p>
        </div>
    );
};

export default BlogPage;
