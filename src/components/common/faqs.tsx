import React from "react";

const Faqs = () => {
  return (
    <section className="py-8 py-md-11 bg-white border-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-md-8 text-center">
            <span className="badge badge-pill badge-primary-desat-soft mb-3">
              <span className="h6 text-uppercase">FAQ</span>
            </span>

            <h2>Frequently asked questions.</h2>

            <p className="font-size-lg text-muted mb-7 mb-md-9">
              Let us help answer the most common questions you might have.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>What does free month trial mean?</h3>

            <p className="text-gray-800 mb-6 mb-md-8">
              It's free to set up Automation.app, you only pay when you activate
              the account. You can try everything for free the first month with
              free credits
            </p>

            <h3>Where do I sign up?</h3>

            <p className="text-gray-800 mb-6 mb-md-8">
              Just "get started now" - as soon as you sign up your organisation,
              you'll automatically be added to the list of our first movers and
              benefits will be added to your account.
            </p>

            <h3>Do I benefit from being a first mover?</h3>

            <p className="text-gray-800 mb-6 mb-md-0">
              Free credits. You collect points which you can use towards
              automations once payment is required. In addition you gain extra
              support.
            </p>

            <h3 className="mt-8">
              What is the next feature you're working on?
            </h3>

            <p className="text-gray-800 mb-6 mb-md-0">
              We work in fast paced sprints. Most features are in develoment for
              2-5 days before you can see them. Therefore most likely our next
              feature is what you'll need - if you let us know:
              nerds@automation.app
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h3>What is the price?</h3>

            <p className="text-gray-800 mb-6 mb-md-8">
              Basically the account is free. But of course with limited usage.
              We strive to build a software that will pay itself back a hundred
              times for every process automated.
            </p>

            <h3>What if I use too many automations for the plan?</h3>

            <p className="text-gray-800 mb-6 mb-md-8">
              We will never charge you for more that the plan you are on. But we
              will let you know if it's time to upgrade.
            </p>

            <h3>Who are the people behind?</h3>

            <p className="text-gray-800 mb-0">
              A development group with experience in improving revenue for
              E-commerce. An architect for e-commerce, a full stack dev with
              lots of e-commerce experience and a digital consultant. We're
              three founding partners.
            </p>
            <h3 className="mt-8">
              I don't think I can do this on my own - I'm not very technical?
            </h3>

            <p className="text-gray-800 mb-6 mb-md-0">
              Need help with the setup og automation.app integration? Invite
              "us" as admin in WordPress: nerds@automation.app. Please choose a
              strong password and make sure you've signed up first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
