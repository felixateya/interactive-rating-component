import thankPic from "./assets/illustration-thank-you.svg";

export function Thanks({ rate }) {
  return (
    <div className="thanks">
      <img src={thankPic} />
      <span>You selected {rate} out of 5.</span>
      <h2>Thank you!</h2>
      <p>
        We appreciate taking the time to give a rating. If you ever need more
        support, don&apos;t hesitate to get in touch.
      </p>
    </div>
  );
}
