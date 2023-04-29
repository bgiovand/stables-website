import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Privacy() {
  return (
    <div className="">
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="">
        <section className="max-w-max min-w-full ">
          <div className="px-20 py-10 prose mx-auto text-white">
            <h1 className="text-white text-5xl font-bold">Privacy Policy</h1>
            <p>
              This Privacy Policy governs the manner in which Stables collects,
              uses, maintains and discloses information collected from users
              (each, a &quot;User&quot;) of the [Website URL] website
              (&quot;Site&quot;). This privacy policy applies to the Site and
              all products and services offered by Stables.
            </p>
            <h3 className="text-white">PERSONAL IDENTIFICATION INFORMATION</h3>
            <p>
              We may collect personal identification information from Users in a
              variety of ways, including, but not limited to, when Users visit
              our site, register on the site, place an order, fill out a form,
              and in connection with other activities, services, features or
              resources we make available on our Site. Users may be asked for,
              as appropriate, name, email address, mailing address, phone
              number, and credit card information. Users may, however, visit our
              Site anonymously. We will collect personal identification
              information from Users only if they voluntarily submit such
              information to us. Users can always refuse to supply personally
              identification information, except that it may prevent them from
              engaging in certain Site-related activities.
            </p>
            <h3 className="text-white">NON-PERSONAL IDENTIFICATION INFORMATION</h3>
            <p>
              We may collect non-personal identification information about Users
              whenever they interact with our Site. Non-personal identification
              information may include the browser name, the type of computer and
              technical information about Users means of connection to our Site,
              such as the operating system and the Internet service providers
              utilized and other similar information.
            </p>
            <h3 className="text-white">WEB BROWSERCOOKIES</h3>
            <p>
              Our Site may use &quot;cookies&quot; to enhance User experience.
              Users web browser places cookies on their hard drive for
              record-keeping purposes and sometimes to track information about
              them. Users may choose to set their web browser to refuse cookies
              or to alert you when cookies are being sent. If they do so, note
              that some parts of the Site may not function properly.
            </p>
            <h3 className="text-white">HOW WE USE COLLECTED INFORMATION</h3>
            <p>
              Stables may collect and use Users personal information for the
              following purposes: - To improve customer service To personalize
              user experience - To process payments - To send periodic emails -
              To run a promotion, contest, survey or other Site feature
            </p>
            <p>
              We may use the email address to send User information and updates
              pertaining to their order. It may also be used to respond to their
              inquiries, questions, and/or other requests. If User decides to
              opt-in to our mailing list, they will receive emails that may
              include company news, updates, related product or service
              information, etc. If at any time the User would like to
              unsubscribe from receiving future emails, we include detailed
              unsubscribe instructions at the bottom of each email.
            </p>
            <h3 className="text-white">HOW WE PROTECT YOUR INFORMATION</h3>
            <p>
              We adopt appropriate data collection, storage and processing
              practices and security measures to protect against unauthorized
              access, alteration, disclosure or destruction of your personal
              information, username, password, transaction information, and data
              stored on our Site.
            </p>
            <h3 className="text-white">SHARING YOUR PERSONAL INFORMATION</h3>
            <p>
              We do not sell, trade, or rent Users personal identification
              information to others. We may share generic aggregated demographic
              information not linked to any personal identification information
              regarding visitors and users with our business partners, trusted
              affiliates and advertisers for the purposes outlined above.
            </p>
            <h3 className="text-white">THIRD PARTY WEBSITES</h3>
            <p>
              Users may find advertising or other content on our Site that link
              to the sites and services of our partners, suppliers, advertisers,
              sponsors, licensors, and other third parties. We do not control
              the content or links that appear on these sites and are not
              responsible for the practices employed by websites linked to or
              from our Site. In addition, these sites or services, including
              their content and links, may be constantly changing. These sites
              and services may have their own privacy policies and customer
              service policies. Browsing and interaction on any other website,
              including websites which have a link to our Site, is subject to
              that websites own terms and policies.
            </p>
            <h3 className="text-white">GOOGLE ANALYTICS</h3>
            <p>
              Our Site uses Google Analytics, a web analytics service provided
              by Google, Inc. (&quot;Google&quot;). Google Analytics uses
              &quot;cookies&quot;, which are text files placed on your computer,
              to help the website analyze how users use the site. The
              information generated by the cookie about your use of the website
              (including your IP address) will be transmitted to and stored by
              Google on servers in the United States. Google will use this
              information for the purpose of evaluating your use of the website,
              compiling reports on website activity for website operators and
              providing other services relating to website activity and internet
              usage. Google may also transfer this information to third parties
              where required to do so by law, or where such third parties
              process the information on Googles behalf. Google will not
              associate your IP address with any other data held by Google. You
              may refuse the use of cookies by selecting the appropriate
              settings on your browser, however, please note that if you do this
              you may not be able to use the full functionality of this website.
              By using this website, you consent to the processing of data about
              you by Google in the manner and for the purposes set out above.
            </p>
            <h3 className="text-white">CHANGES TO THIS PRIVACY POLICY</h3>
            <p>
              Stables has the discretion to update this privacy policy at any
              time. When we do, we will revise the updated date at the bottom of
              this page. We encourage Users to frequently check this page for
              any changes to stay informed about how we are helping to protect
              the personal information we collect. You acknowledge and agree
              that it is your responsibility to review this privacy policy
              periodically and become aware of modifications.
            </p>
            <h3 className="text-white"> YOUR ACCEPTANCE OF THESE TERMS</h3>
            <p>
              By using this Site, you signify your acceptance of this policy. If
              you do not agree to this policy, please do not use our Site. Your
              continued use of the Site following the posting of changes to this
              policy will be deemed your acceptance of those changes.
            </p>
            <h3 className="text-white">CONTACTING US</h3>
            <p>
              If you have any questions about this Privacy Policy, the practices
              of this site, or your dealings with this site, please contact us
              at info@getstables.com. This privacy policy is designed to comply
              with PIPEDA, the Canadian privacy law that governs how
              organizations collect, use, and disclose personal information in
              the course of commercial activities. It covers the collection,
              use, and disclosure of personal information, as well as the use of
              Google Analytics on the website.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}