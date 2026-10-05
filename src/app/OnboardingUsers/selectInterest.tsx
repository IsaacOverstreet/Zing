import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import AppContainer from "@/src/components/AppContainer";
import { useResponsive } from "@/src/utils/responsive";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function SelectInterest() {
  const { textSize, controlHeight, content } = useResponsive();
  const skills = [
    "Graphic Design",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Photography",
    "Video Editing",
    "Writing",
    "Marketing",
    "Data Analysis",
    "Public Speaking",
    "Project Management",
    "Content Creation",
  ];

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((current) =>
      current.includes(skill)
        ? current.filter((item) => item !== skill)
        : [...current, skill],
    );
  };

  const handlePrevious = () => {
    // previous screen
  };

  const handleNext = () => {
    if (selectedSkills.length < 4) return;

    // next screen
  };
  return (
    <AppContainer>
      <View style={{ gap: content(60) }} className="w-full flex-1 ">
        {/* Progress indicator */}
        <View className="w-full flex-row gap-2 ">
          <View className="h-[4px] flex-1 rounded-full bg-[#D985A8]" />
          <View className="h-[4px] flex-1 rounded-full bg-[#D985A8]" />
          <View className="h-[4px] flex-1 rounded-full bg-[#E5E1DE]" />
        </View>

        {/* Heading and description */}
        <View>
          <Text
            style={{
              fontFamily: fontFamily.semiBold,
              fontSize: textSize(24),
            }}
          >
            Select Interest
          </Text>

          <Text
            className="mt-5"
            style={{
              fontFamily: fontFamily.regular,
              fontSize: textSize(12),
            }}
          >
            Pick your interests and we'll curate the events you'll actually care
            about.
          </Text>

          {/* Skill selection */}
          <View
            style={{ gap: content(10) }}
            className="mt-20 flex-row flex-wrap justify-center "
          >
            {skills.map((skill) => {
              const isSelected = selectedSkills.includes(skill);

              return (
                <Pressable
                  key={skill}
                  onPress={() => toggleSkill(skill)}
                  style={{ height: controlHeight(40) }}
                  className={`rounded-full justify-center  border px-[16px] py-[8px] ${
                    isSelected
                      ? "border-[#000000] border-[2px]"
                      : "border-[#C4C4C4]"
                  }`}
                >
                  <Text
                    className="text-center"
                    style={{
                      fontFamily: fontFamily.medium,
                      fontSize: textSize(14),
                    }}
                  >
                    {skill}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Navigation buttons */}
        <View className="mt-auto flex-row gap-4 pb-4">
          <Pressable
            style={{
              height: content(43),
            }}
            className="h-[48px] flex-1 items-center justify-center rounded-full border  border-[#999999] shadow-black shadow-[0px_3px_0px] bg-[#FFF9F5]"
          >
            <Text
              style={{
                fontFamily: fontFamily.medium,
                fontSize: textSize(16),
              }}
            >
              Previous
            </Text>
          </Pressable>

          <Pressable
            style={{
              height: content(43),
            }}
            onPress={handleNext}
            disabled={selectedSkills.length < 4}
            className={`flex-1 items-center justify-center rounded-full border  border-[#999999] shadow-black shadow-[0px_3px_0px] bg-[#FFF9F5 ${
              selectedSkills.length >= 4 ? "bg-[#765097]" : "bg-[#D9D4D1]"
            }`}
          >
            <Text
              style={{
                fontFamily: fontFamily.medium,
                fontSize: textSize(16),
                color: selectedSkills.length >= 4 ? "#FFF9F5" : "#000000",
              }}
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
    </AppContainer>
  );
}
