import type { NextPage } from "next";

const NotificationContainer: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-1 text-left text-base text-neutral-00 font-caption-1-medium">
      <div className="self-stretch bg-gray-3100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start relative text-xl text-purple-color-40 border-b-[1px] border-solid border-dimgray-800">
        <div className="self-stretch flex flex-row items-center justify-start pt-3 px-5 pb-2 gap-[6px] z-[0]">
          <div className="flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Your Notification
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px] text-sm">
            <input
              className="w-5 relative h-5 overflow-hidden shrink-0"
              type="checkbox"
            />
            <div className="relative font-medium">Mark all as read</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 z-[1] text-sm text-neutral-00">
          <div className="self-stretch rounded-3xs flex flex-col items-start justify-start p-1">
            <div className="self-stretch rounded-42xl flex flex-row items-start justify-start gap-[8px]">
              <div className="flex-1 rounded-3xs h-[38px] flex flex-row items-center justify-center p-1 box-border gap-[8px]">
                <div className="relative font-medium">All</div>
                <div className="rounded-sm bg-[#F3574C] flex flex-col items-center justify-center py-1 px-2 text-3xs">
                  <div className="relative font-semibold">7</div>
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-3xs flex flex-row items-center justify-center p-1">
                <div className="relative font-medium">Events</div>
              </div>
              <div className="self-stretch flex-1 rounded-3xs flex flex-row items-center justify-center p-1">
                <div className="relative font-medium">Spaces</div>
              </div>
              <div className="self-stretch flex-1 rounded-3xs flex flex-row items-center justify-center p-1">
                <div className="relative font-medium">Invites</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-9 absolute !m-[0] top-[90px] left-[50px] max-h-full z-[2]"
          alt=""
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 gap-[8px] text-gray-3400">
        <div className="flex-1 flex flex-col items-start justify-center gap-[8px]">
          <div className="self-stretch flex flex-row items-center justify-start relative gap-[12px]">
            <div className="flex flex-row items-start justify-start relative z-[0] text-5xs">
              <img
                className="w-10 rounded-sm1 h-10 overflow-hidden shrink-0 object-cover z-[0]"
                src="/1.png"
              />
 
            </div>
            <div className="flex-1 relative leading-[140%] z-[1]">
              <span className="font-medium">{`Amalia andani `}</span>
              <span className="text-[#5B5B5B]">{`waved to you during `}</span>
              <span className="font-medium">Fitness event</span>
            </div>
            <div className="w-[11px] h-[11px] relative rounded bg-[firebrick]" />
          </div>
          <div className="flex flex-col items-start justify-center py-0 pr-0 pl-[52px] text-2xs-5 text-neutral-00">
            <div className="rounded-4xs bg-neutral-90 overflow-hidden flex flex-row items-center justify-center py-1.5 px-[10.5px] gap-[6px]">
              <img
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                alt=""
              />
              <div className="relative leading-[15px] font-semibold whitespace-pre-wrap">
                👋 Waved back
              </div>
              
              <img
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-2 relative rounded-[50%] bg-tomato h-2" />
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 gap-[8px] text-gray-3400">
        <div className="flex-1 flex flex-row items-center justify-start relative gap-[12px]">
          <div className="flex flex-row items-start justify-start relative z-[0] text-5xs">
            <img
              className="w-10 rounded-sm1 h-10 overflow-hidden shrink-0 object-cover z-[0]"
              src="/2.png"
            />
          </div>
          <div className="flex-1 relative leading-[140%] z-[1]">
            <span className="font-medium">{`Amalia and 11 other `}</span>
            <span className="text-[#5B5B5B]">waved to you during</span>
            <span className="font-medium"> Fitness Event</span>
          </div>
            <div className="w-[11px] h-[11px] relative rounded bg-[firebrick]" />

        </div>
        <div className="w-2 relative rounded-[50%] bg-tomato h-2" />
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 gap-[8px] text-gray-3400">
        <div className="flex-1 flex flex-col items-start justify-center gap-[8px]">
          <div className="self-stretch flex flex-row items-center justify-start relative gap-[12px]">
            <div className="flex flex-row items-start justify-start z-[0]">
              <img
                className="w-10 relative rounded-[7.38px] h-10 overflow-hidden shrink-0"
                src="/3.png"
              />
            </div>
            <div className="flex-1 relative leading-[140%] z-[1]">
              <span className="font-medium">{`Fitness event `}</span>
              <span  className="text-[#5B5B5B]">{`is starting today at `}</span>
              <span className="font-medium">13:00. Don’t miss out</span>
            </div>
            <div className="w-[11px] h-[11px] relative rounded bg-[firebrick]" />

          </div>
          <div className="flex flex-row items-center justify-start py-0 pr-0 pl-[52px] gap-[8px] text-2xs-5 text-neutral-00">
            <div className="rounded-4xs bg-[#412E67] overflow-hidden flex flex-row items-center justify-center py-1.5 px-[10.5px] gap-[6px]">
              <img
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                src="/3.png"
              />
              <div className="relative leading-[15px] font-semibold opacity-[0.5]">
                Join Event
              </div>
              <img
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                src="/3.png"
              />
            </div>
            <div className="rounded-4xs bg-neutral-90 overflow-hidden flex flex-row items-center justify-center py-1.5 px-[10.5px] gap-[6px]">
              <img
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                src="/3.png"
              />
              <div className="relative leading-[15px] font-semibold">
                Add reminder
              </div>
              <img
                className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-2 relative rounded-[50%] bg-tomato h-2" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-center py-2.5 px-5">
        <div className="self-stretch flex flex-row items-start justify-start relative gap-[12px]">
          <div className="flex flex-row items-start justify-start z-[0]">
            <img
              className="w-10 relative rounded-[7.38px] h-10 overflow-hidden shrink-0"
              src="/3.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-[8px] z-[1]">
            <div className="self-stretch relative leading-[140%]">
              <span>{`Fitness event `}</span>
              <span>starting in</span>
              <span> 15 Mins</span>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px] text-2xs-5">
              <div className="rounded-4xs bg-[#412E67] overflow-hidden flex flex-row items-center justify-center py-1.5 px-[10.5px] gap-[6px]">
                <img
                  className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                  alt=""
                />
                <div className="relative leading-[15px] font-semibold opacity-[0.5]">
                  Join Event
                </div>
                <img
                  className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                  alt=""
                />
              </div>
              <div className="rounded-4xs bg-neutral-90 overflow-hidden flex flex-row items-center justify-center py-1.5 px-[10.5px] gap-[6px]">
                <img
                  className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                  alt=""
                />
                <div className="relative leading-[15px] font-semibold">
                  Add reminder
                </div>
                <img
                  className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center py-2.5 px-5 text-gray-3000">
        <div className="self-stretch flex flex-row items-start justify-start relative gap-[12px]">
          <div className="flex flex-row items-start justify-start z-[0]">
            <img
              className="w-10 relative rounded-[7.38px] h-10 overflow-hidden shrink-0"
              src="/3.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-center z-[1]">
            <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
              <div className="self-stretch relative leading-[140%] text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Fitness event Is Started
              </div>
              <div className="self-stretch rounded-sm bg-[#323134] flex flex-row items-center justify-start py-2 px-2.5 gap-[12px] text-sm">
                <img
                  className="w-10 relative rounded-sm h-10 overflow-hidden shrink-0 object-cover"
                  src="/4.png"
                />
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[140%] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Fitnest Event
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[6px] opacity-[0.8] text-xs">
                    <div className="relative leading-[140%] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] opacity-[0.5]">
                      30Mins Left
                    </div>
                    <div className="w-1 relative rounded-[50%] bg-gray-300 h-1" />
                    <div className="relative leading-[140%] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] opacity-[0.5]">
                      503 Participant
                    </div>
                  </div>
                </div>
                <div className="rounded-4xs bg-[#7E47EB] overflow-hidden flex flex-row items-center justify-center py-1.5 px-[10.5px] gap-[6px] text-2xs-5 text-neutral-00">
                  <img
                    className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <div className="relative leading-[15px] font-semibold opacity-[0.9]">
                    Join Event
                  </div>
                  <img
                    className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* <div className="self-stretch flex flex-col items-start justify-center py-2.5 px-5">
        <div className="self-stretch flex flex-row items-start justify-start relative gap-[12px]">
          <div className="flex flex-row items-start justify-start relative z-[0]">
            <img
              className="w-10 rounded-sm1 h-10 overflow-hidden shrink-0 object-cover z-[0]"
              alt=""
            />
            <div className="w-[18px] !m-[0] absolute bottom-[-6px] left-[29px] rounded-lg bg-neutral-90 box-border h-[18px] flex flex-col items-center justify-center p-[5px] z-[1] border-[1px] border-solid border-gray-1300">
              <img className="w-2 relative h-2" alt="" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center z-[1]">
            <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
              <div className="w-[349px] relative leading-[140%] inline-block h-11 shrink-0">
                <span>{`Amalia andani `}</span>
                <span className="whitespace-pre-wrap">{`Shared  `}</span>
                <span>{`Conferences spaces `}</span>
                <span>With you!</span>
              </div>
              <div className="self-stretch rounded-sm bg-darkslategray-800 flex flex-row items-center justify-start py-2 px-2.5 gap-[12px] text-10xs-3">
                <div className="w-12 relative h-10">
                  <div className="absolute top-[-2px] left-[calc(50%_-_23px)] rounded-10xs-6 bg-darkslategray-600 box-border w-[46px] h-[22px] border-[0.2px] border-solid border-darkslategray-200" />
                  <div className="absolute top-[0px] left-[0px] rounded-10xs-6 bg-neutral-00 w-12 h-10 overflow-hidden flex flex-row items-start justify-start p-[3.254016637802124px] box-border gap-[1.627008318901062px]">
                    <img
                      className="w-[68px] absolute !m-[0] bottom-[-8px] left-[calc(50%_-_34px)] h-24 object-cover z-[0]"
                      alt=""
                    />
                    <div className="w-full absolute !m-[0] right-[0px] bottom-[-28px] left-[0px] [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0))] h-7 opacity-[0.7] z-[1]" />
                    <div className="w-[42px] h-[34px] flex flex-col items-start justify-center gap-[7.646939277648926px] z-[2]">
                      <div className="self-stretch h-[5px] flex flex-row items-center justify-between">
                        <div className="w-[2.3px] relative rounded-[0.65px] bg-green-2 box-border h-[2.3px] border-[0.7px] border-solid border-mediumseagreen-200" />
                        <div className="w-[18px] rounded-11xs-3 bg-gray-600 [backdrop-filter:blur(0.65px)] h-[5px] flex flex-row items-center justify-center py-[0.9762049913406372px] pr-[1.627008318901062px] pl-[0.9762049913406372px] box-border gap-[1.3016066551208496px]">
                          <img
                            className="w-[12.3px] rounded-[0.98px] h-[12.3px] overflow-hidden shrink-0 object-cover"
                            alt=""
                          />
                          <div className="relative font-medium">Watching</div>
                        </div>
                      </div>
                      <div className="self-stretch h-[21px] flex flex-col items-start justify-end gap-[2.603213310241699px]">
                        <div className="self-stretch h-[15px] flex flex-col items-start justify-end gap-[1.3016066551208496px]">
                          <div className="w-[27px] flex flex-row items-center justify-center gap-[1.3016066551208496px]">
                            <div className="relative">20 Video</div>
                            <div className="w-px relative rounded-[50%] bg-neutral-00 h-px" />
                            <div className="relative">2140 Subs</div>
                          </div>
                          <div className="self-stretch relative text-9xs-3 leading-[4.88px] font-medium">
                            How we plan the beautiful trip in Bali, Indonesia
                          </div>
                        </div>
                        <div className="w-4 h-1 flex flex-row items-center justify-start gap-[1.3016066551208496px]">
                          <img
                            className="w-[24.6px] rounded-[0.98px] h-[24.6px] overflow-hidden shrink-0 object-cover"
                            alt=""
                          />
                          <div className="w-[0.2px] relative box-border h-[1.2px] opacity-[0.5] border-r-[0.2px] border-solid border-neutral-00" />
                          <div className="w-2.5 h-1 flex flex-row items-center justify-start">
                            <img
                              className="w-[24.6px] rounded-[0.98px] h-[24.6px] overflow-hidden shrink-0 object-cover"
                              alt=""
                            />
                            <img
                              className="w-[24.6px] rounded-[0.98px] h-[24.6px] overflow-hidden shrink-0 object-cover ml-[-0.98px]"
                              alt=""
                            />
                            <img
                              className="w-[24.6px] rounded-[0.98px] h-[24.6px] overflow-hidden shrink-0 object-cover ml-[-0.98px]"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px] text-sm">
                  <div className="self-stretch relative leading-[140%] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Conference Spaces
                  </div>
                  <div className="relative text-xs leading-[140%] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] opacity-[0.5]">
                    204 Total video
                  </div>
                </div>
                <div className="rounded-4xs bg-blueviolet-100 overflow-hidden flex flex-row items-center justify-center py-1.5 px-[10.5px] gap-[6px] text-2xs-5">
                  <img
                    className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <div className="relative leading-[15px] font-semibold opacity-[0.9]">
                    Open Spaces
                  </div>
                  <img
                    className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[101px] absolute !m-[0] top-[-8px] left-[106px] font-medium font-body-body-3-medium text-gray-3000 hidden z-[2]">
            For 5000 SMS
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-5">
        <div className="self-stretch flex flex-row items-start justify-start relative gap-[12px]">
          <div className="flex flex-row items-start justify-start relative z-[0]">
            <img
              className="w-10 rounded-sm1 h-10 overflow-hidden shrink-0 object-cover z-[0]"
              alt=""
            />
            <div className="w-[18px] !m-[0] absolute bottom-[-6px] left-[29px] rounded-lg bg-neutral-90 box-border h-[18px] flex flex-col items-center justify-center p-[5px] z-[1] border-[1px] border-solid border-gray-1300">
              <img className="w-2 relative h-2" alt="" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center z-[1]">
            <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
              <div className="w-[349px] relative leading-[140%] inline-block h-11 shrink-0">
                <span>{`Producer of the Fitness event scheduled `}</span>
                <span>{`a rehearsal on `}</span>
                <span>11 January 2024</span>
              </div>
              <div className="self-stretch rounded-sm bg-darkslategray-800 flex flex-row items-center justify-start py-2 px-2.5 gap-[12px] text-sm text-gray-3000">
                <img className="w-6 relative h-6 object-cover" alt="" />
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[140%] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Brief_docs.xls
                  </div>
                  <div className="relative text-xs leading-[140%] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] opacity-[0.5]">
                    2mb
                  </div>
                </div>
                <div className="w-[101px] relative text-base font-medium font-body-body-3-medium hidden">
                  For 5000 SMS
                </div>
                <div className="rounded-4xs bg-blueviolet-100 overflow-hidden flex flex-row items-center justify-center py-1.5 px-[10.5px] gap-[6px] text-2xs-5 text-neutral-00">
                  <img
                    className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <div className="relative leading-[15px] font-semibold opacity-[0.9]">
                    Open Brief
                  </div>
                  <img
                    className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[101px] absolute !m-[0] top-[-8px] left-[106px] font-medium font-body-body-3-medium text-gray-3000 hidden z-[2]">
            For 5000 SMS
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-5">
        <div className="self-stretch flex flex-row items-start justify-start relative gap-[12px]">
          <div className="flex flex-row items-start justify-start relative z-[0]">
            <img
              className="w-10 rounded-sm1 h-10 overflow-hidden shrink-0 object-cover z-[0]"
              alt=""
            />
            <div className="w-[18px] !m-[0] absolute bottom-[-6px] left-[29px] rounded-lg bg-neutral-90 box-border h-[18px] flex flex-col items-center justify-center p-[5px] z-[1] border-[1px] border-solid border-gray-1300">
              <img className="w-2 relative h-2" alt="" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center z-[1]">
            <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
              <div className="w-[349px] relative leading-[140%] inline-block h-11 shrink-0">
                <span>{`Amalia andani `}</span>
                <span className="whitespace-pre-wrap">{`add new video to  `}</span>
                <span>{`Conferences spaces `}</span>
              </div>
              <div className="self-stretch rounded-sm bg-darkslategray-800 flex flex-row items-center justify-start py-2 px-2.5 gap-[12px] text-sm text-gray-3000">
                <div className="w-[59px] rounded-sm bg-neutral-00 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-[3.254016637802124px] box-border relative gap-[1.627008318901062px]">
                  <img
                    className="w-[59px] absolute !m-[0] top-[calc(50%_-_30px)] left-[calc(50%_-_29.5px)] h-[60px] object-cover z-[0]"
                    alt=""
                  />
                  <img className="w-[27px] relative h-[27px] z-[1]" alt="" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative leading-[140%] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Video name
                  </div>
                  <div className="relative text-xs leading-[140%] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] opacity-[0.5]">
                    30 Mins
                  </div>
                </div>
                <div className="w-[101px] relative text-base font-medium font-body-body-3-medium hidden">
                  For 5000 SMS
                </div>
                <div className="rounded-4xs bg-blueviolet-100 overflow-hidden flex flex-row items-center justify-center py-1.5 px-[10.5px] gap-[6px] text-2xs-5 text-neutral-00">
                  <img
                    className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <div className="relative leading-[15px] font-semibold opacity-[0.9]">
                    Watch Video
                  </div>
                  <img
                    className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[101px] absolute !m-[0] top-[-8px] left-[106px] font-medium font-body-body-3-medium text-gray-3000 hidden z-[2]">
            For 5000 SMS
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-5">
        <div className="self-stretch flex flex-row items-start justify-start relative gap-[12px]">
          <div className="flex flex-row items-start justify-start relative z-[0]">
            <img
              className="w-10 rounded-sm1 h-10 overflow-hidden shrink-0 object-cover z-[0]"
              alt=""
            />
            <div className="w-[18px] !m-[0] absolute bottom-[-6px] left-[29px] rounded-lg bg-neutral-90 box-border h-[18px] flex flex-col items-center justify-center p-[5px] opacity-[0] z-[1] border-[1px] border-solid border-gray-1300">
              <img className="w-2 relative h-2" alt="" />
            </div>
          </div>
          <div className="self-stretch w-[349px] flex flex-col items-start justify-center gap-[8px] z-[1]">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="relative leading-[140%] [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
                Haryanto react your comment
              </div>
            </div>
            <div className="self-stretch rounded-sm bg-darkslategray-800 flex flex-row items-start justify-start py-2 px-2.5 gap-[12px] text-sm">
              <div className="w-[329px] flex flex-row items-start justify-start gap-[10px]">
                <div className="w-[59px] rounded-sm bg-neutral-00 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-[3.254016637802124px] box-border relative gap-[1.627008318901062px]">
                  <img
                    className="w-[59px] absolute !m-[0] top-[calc(50%_-_30px)] left-[calc(50%_-_29.5px)] h-[60px] object-cover z-[0]"
                    alt=""
                  />
                  <img className="w-[27px] relative h-[27px] z-[1]" alt="" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                  <div className="self-stretch rounded-lg [background:linear-gradient(89.98deg,_rgba(35,_35,_35,_0.7),_rgba(33,_33,_33,_0))] flex flex-col items-start justify-center py-2 pr-0 pl-2 border-l-[1px] border-solid border-gray-2000">
                    <div className="self-stretch relative leading-[140%] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print...
                    </div>
                  </div>
                  <div className="rounded-4xs bg-darkslategray-100 overflow-hidden flex flex-row items-center justify-center py-[5px] px-[10.5px] gap-[6px] text-base">
                    <img
                      className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                    <div className="relative leading-[15px] font-semibold">
                      😂
                    </div>
                    <img
                      className="w-[15px] relative h-[15px] overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-[101px] relative text-base font-medium font-body-body-3-medium text-gray-3000 hidden">
                For 5000 SMS
              </div>
            </div>
          </div>
          <div className="w-[101px] absolute !m-[0] top-[-8px] left-[106px] font-medium font-body-body-3-medium text-gray-3000 hidden z-[2]">
            For 5000 SMS
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-5 text-gray-3000">
        <div className="self-stretch flex flex-row items-start justify-start relative gap-[12px]">
          <div className="flex flex-row items-start justify-start relative z-[0]">
            <img
              className="w-10 rounded-sm1 h-10 overflow-hidden shrink-0 object-cover z-[0]"
              alt=""
            />
            <div className="w-[18px] !m-[0] absolute bottom-[-6px] left-[29px] rounded-lg bg-neutral-90 box-border h-[18px] flex flex-col items-center justify-center p-[5px] z-[1] border-[1px] border-solid border-gray-1300">
              <img className="w-2 relative h-2" alt="" />
            </div>
          </div>
          <div className="self-stretch w-[349px] flex flex-col items-start justify-center gap-[8px] z-[1]">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="relative leading-[140%] text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Haryanto replied your comment
              </div>
            </div>
            <div className="self-stretch rounded-sm bg-darkslategray-800 flex flex-row items-start justify-start py-2 px-2.5 gap-[12px] text-sm">
              <div className="w-[329px] flex flex-row items-start justify-start gap-[10px]">
                <div className="w-[59px] rounded-sm bg-neutral-00 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-[3.254016637802124px] box-border relative gap-[1.627008318901062px]">
                  <img
                    className="w-[59px] absolute !m-[0] top-[calc(50%_-_30px)] left-[calc(50%_-_29.5px)] h-[60px] object-cover z-[0]"
                    alt=""
                  />
                  <img className="w-[27px] relative h-[27px] z-[1]" alt="" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                  <div className="self-stretch rounded-lg [background:linear-gradient(89.98deg,_rgba(35,_35,_35,_0.7),_rgba(33,_33,_33,_0))] flex flex-col items-start justify-center py-2 pr-0 pl-2 border-l-[1px] border-solid border-gray-2000">
                    <div className="self-stretch relative leading-[140%] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] overflow-hidden text-ellipsis whitespace-nowrap">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print...
                    </div>
                  </div>
                  <div className="self-stretch relative leading-[140%] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print...
                  </div>
                </div>
              </div>
              <div className="w-[101px] relative text-base font-medium font-body-body-3-medium hidden">
                For 5000 SMS
              </div>
            </div>
          </div>
          <div className="w-[101px] absolute !m-[0] top-[-8px] left-[106px] font-medium font-body-body-3-medium inline-block z-[2]">
            For 5000 SMS
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default NotificationContainer;
