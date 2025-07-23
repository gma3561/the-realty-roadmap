import React, { useState } from 'react';
import { CheckCircle, Circle, Calendar, Target, Users, BarChart3, ChevronDown, ChevronRight, Building2, TrendingUp, Shield, Zap } from 'lucide-react';
import '../DigitalRoadmap.css';

const DigitalRoadmapVisual = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const mentoringContent = {
    title: "더부동산 정연서대표님 멘토링 - 현행 업무 프로세스 진단",
    sections: [
      {
        id: "business_model",
        title: "사업 모델 검토",
        icon: <Building2 className="w-5 h-5" />,
        color: "text-blue-600",
        items: [
          {
            question: "무엇을 하려는가?",
            answer: "고급주거 중개",
            subItems: [
              "왜 하려는가? → 고액 수수료를 기대할 수 있는 좋은 사업",
              "혼자 vs 회사 운영 효용성 분석 필요",
              "물건이 많아 혼자 핸들링의 한계",
              "혼자 할 때 개인 기대 효용 vs 회사로 했을 때 개인 기대 효용",
              "혼자 할 때 기대 효용이 높다면? 혼자하면 됨"
            ]
          }
        ]
      },
      {
        id: "optimization",
        title: "운영 최적화 분석",
        icon: <TrendingUp className="w-5 h-5" />,
        color: "text-green-600",
        items: [
          {
            question: "효율성 극대화 방안",
            answer: "10명이 10억 vs 5명이 10억",
            subItems: [
              "사무실 위치와 임대료 적절성 검토",
              "인력 유지 비용 최적화 (식대, 교통비 등)",
              "마케팅 ROI 분석 및 개선",
              "낭비되는 비용은 없는가?",
              "고정비 항목과 비용 규모는 적절한가?"
            ]
          },
          {
            question: "마케팅 효율성",
            answer: "단위 마케팅 비용 대비 기대 매출 분석",
            subItems: [
              "계약 성공률이 낮은 물건 유형 파악",
              "효율이 낮은 채널 정리",
              "새로운 채널 발굴 (회사 사이트 → 리드 발굴)",
              "모든 물건에 마케팅을 해도 계약이 되는 것도 있고 안되는 것도 있음",
              "단위 마케팅 비용의 기대 매출을 올리는 방법은?"
            ]
          }
        ]
      },
      {
        id: "organization",
        title: "조직 관리 진단",
        icon: <Users className="w-5 h-5" />,
        color: "text-purple-600",
        items: [
          {
            question: "조직 장악력",
            answer: "불평, 퍼포먼스, 스트레스 요인 분석",
            subItems: [
              "불평이 많은 이유: 태도 vs 컨트롤 이슈",
              "퍼포먼스 부족 원인: 스킬 부족 vs 동기 부족",
              "조직원 동기부여 요소 파악",
              "프로 3명 vs 아마추어 10명 전략 선택",
              "대표의 권위가 있는가?",
              "조직원들은 스트레스가 있나? 대표의 스트레스 vs 조직원들의 스트레스",
              "조직원들이 원하는 것은? 무엇으로 동기부여가 되는가?"
            ]
          }
        ]
      }
    ],
    proposals: [
      "명확한 비전과 미션 수립",
      "연간 목표, 사업 로드맵 수립", 
      "주간/월간/연간 KPI 설정",
      "조직 장악 - 이끌거나, 따르거나, 떠나거나",
      "시스템을 통한 업무 효율화",
      "비용 효율화 - 고정비, 마케팅 비용 최적화",
      "명확한 대표로서의 아이덴티티 필요",
      "인당 매출 증대 방안"
    ],
    priorities: [
      "회사 운영 정책, 구조 수립",
      "조직원 관리",
      "P&L 관리"
    ]
  };

  const roadmapData = [
    {
      weeks: "1-2주차",
      title: "현행 업무 프로세스 진단",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-blue-500",
      tasks: [
        "사업 모델 검토 및 효용성 분석",
        "조직 관리 현황 진단",
        "운영 최적화 방안 도출",
        "세부 개선 계획 수립"
      ]
    },
    {
      weeks: "3-4주차",
      title: "회사 운영 최적화",
      icon: <Target className="w-6 h-6" />,
      color: "bg-green-500",
      tasks: [
        "명확한 비전/미션 정립 및 전파",
        "KPI 설정 및 성과 관리 체계 수립",
        "마케팅 ROI 최적화 방안 구현",
        "매물 관리 시스템 및 직원 성과 관리 효율화"
      ]
    },
    {
      weeks: "5주차",
      title: "조직 관리 개선",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-500",
      tasks: [
        "조직 장악력 강화 전략 실행",
        "인력 구조 최적화 (프로 중심)",
        "직원 동기부여 시스템 구축",
        "조직 스트레스 관리 및 업무 환경 개선"
      ]
    },
    {
      weeks: "6주차",
      title: "P&L 관리 체계 정립",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "bg-orange-500",
      tasks: [
        "비용 효율화 - 고정비, 마케팅 비용 최적화",
        "인당 매출 증대 방안 구현",
        "주간/월간/연간 성과 관리 체계 운영",
        "고급 주거 중개 시장 확대 전략 실행"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          더부동산 정연서대표님 멘토링 내용 반영
        </h1>
        <p className="text-gray-600 mb-6">업무 프로세스 진단 및 개선 방안</p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>

      {/* 멘토링 상세 내용 */}
      <div className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Shield className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">{mentoringContent.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {mentoringContent.sections.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className={section.color}>{section.icon}</span>
                  <h3 className="ml-3 font-semibold text-gray-800">{section.title}</h3>
                </div>
                {expandedSections[section.id] ? 
                  <ChevronDown className="w-5 h-5 text-gray-500" /> : 
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                }
              </button>
              
              {expandedSections[section.id] && (
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  {section.items.map((item, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <div className="font-medium text-gray-700 mb-2">{item.question}</div>
                      <div className="text-sm text-blue-600 mb-3 font-medium">{item.answer}</div>
                      <ul className="space-y-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="text-gray-400 mr-2">•</span>
                            <span>{subItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 제안사항 */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Zap className="w-6 h-6 text-orange-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">전반적인 제안사항</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {mentoringContent.proposals.map((proposal, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm">{proposal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 우선순위 제안 */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">우선순위 제안</h3>
          </div>
          <div className="flex flex-col space-y-3">
            {mentoringContent.priorities.map((priority, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">{index + 1}</div>
                <span className="text-gray-800 font-medium">{priority}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 기존 로드맵 타임라인 */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>

        {roadmapData.map((phase, index) => (
          <div key={index} className="relative mb-16">
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 ${phase.color} rounded-full flex items-center justify-center text-white shadow-lg z-10`}>
              {phase.icon}
            </div>

            <div className={`${index % 2 === 0 ? 'mr-auto pr-8 text-right' : 'ml-auto pl-8'} w-1/2`}>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    {phase.weeks}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {phase.title}
                </h3>

                <div className="space-y-3">
                  {phase.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-start space-x-3">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 프로젝트 요약 */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-blue-500 mb-2">6</div>
          <div className="text-gray-600">총 기간 (주)</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-green-500 mb-2">3</div>
          <div className="text-gray-600">우선순위 항목</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-purple-500 mb-2">8</div>
          <div className="text-gray-600">제안사항</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-orange-500 mb-2">16</div>
          <div className="text-gray-600">개선 과제</div>
        </div>
      </div>
      
      {/* 푸터 */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-200 pt-6">
        <p>© 2025 더부동산 - 정연서대표님 멘토링 내용 기반</p>
      </div>
    </div>
  );
};

export default DigitalRoadmapVisual;