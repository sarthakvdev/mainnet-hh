import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Faq = () => {
  const questions = [
    {
      title: "Where's the Hacker House happening?",
      answer: "Manali, Himachal Pradesh ⛰",
    },
    {
      title: "What's the venue?",
      answer: "Event's venue will be shared with the selected Hackers over the email.",
    },
    {
      title: "Is the registration free or paid?",
      answer: "If you're selected, it's completly free for you.",
    },
    {
      title: "Would we receive any swags?",
      answer: "Hell Yeah! 🔥",
    },
    {
      title:
        "Who's organising this buildspace India meet? Are you affiliated with the main buildspace?",
      answer:
        "We're a group of volunteers who are facilitating this IRL meet. Yes, we're with the main buildspace and are funded from the buildspace DAO treasury.",
    },
    {
      title: "Would you be paying for my trip or stay in Manali?",
      answer:
        "Except travel expenses, everything will be on the House!",
    },
    {
      title: "What all should we bring?",
      answer:
        "Absolutely! Your machine is your weapon.",
    },
    // {
    //   title:
    //     "I'm traveling from a different city and the trip might cost me a lot. Should I attend?",
    //   answer:
    //     "If you can attend, then why not. We're putting our best efforts to make it a memorable event. Will be doing it in other Major cities across India too 🎉.",
    // },
  ];

  return (
    <div className="max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto px-6 pt-[80px] md:pt-40">
      <div>
        <div className="relative flex flex-col items-center justify-center sm:px-0 z-20 pb-32">
          <div className="pb-10 md:pb-20">
            <h1
              role="heading"
              className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-10 text-black font-heading "
            >
              frequently asked questions
            </h1>
          </div>
          <div className="w-full md:px-10">
            <Accordion allowToggle>
              {questions.map((data, key) => (
                <AccordionItem key={key} border="none">
                  <h2>
                    <AccordionButton
                      className="cursor-pointer"
                      mb="4"
                      py="6"
                      px="12"
                      fontSize="xl"
                      rounded="xl"
                      bg="black"
                      color="white"
                      _hover={{ bg: "blackAlpha.900" }}
                      _focus={{}}
                      _active={{}}
                    >
                      <Box flex="1" textAlign="left">
                        {data.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    p="6"
                    mb="6"
                    fontSize="lg"
                    border="none"
                    color="black"
                  >
                    {data.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
