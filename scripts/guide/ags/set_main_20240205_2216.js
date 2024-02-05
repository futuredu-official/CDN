function set_main() {
	function Div_main() {
		return (
			<div class="flex flex-col w-full max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24 space-y-8">
			<Div_header title={"진학지도 시스템"} />

				<div class="flex flex-col">
					<div class="flex flex-col space-y-4">
						<Div_heading title={"데이터 준비"} function={() => click_tab("slide1")} />
						<div class="hidden" id="slide1">
							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/ags/image0010.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"2번째 행이 변수명이 되고 3번째 행부터 데이터를 입력함."} />
								<Div_text text={"전과목, 세부과목, 과목군, 학기별 전과목 성적 등의 성적뿐만 아니라 봉사 시간, 세특, 종합의견(토픽발현 확률) 등 비교과 영역에 대한 다양한 독립변수(피처)를 넣을 수 있음."} />
								<Div_text text={"학과명은 모든 졸업생에 대해 통일해야 함."} />
								<Div_text text={"데이터가 많이 쌓이고, 수시전형 서류평가에서 대학들이 참고할만한 데이터를 넣어야 예측 정확도가 올라감."} />
								<Div_text text={"대학교별 전형, 학과, 합불 등의 정보를 기입하되 해당 대학에 지원하지 않은 경우 입력하지 않아야 함."} />
								<Div_text text={"KAIST와 같은 경우에도 “일반전형“, “단일계열“, “합“과 같이 전형, 학과, 합불의 형식을 그대로 유지함."} />
								<Div_text text={"의대 등과 같이 일반적이지 않은 데이터는 입력하지 않는 것이 바람직함."} />
							</ul>
						</div>
					</div>


					<div class="flex flex-col space-y-4">
						<Div_heading title={"대학 및 학과별 합불 현황"} function={() => click_tab("slide2")} />
						<div class="hidden" id="slide2">
							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/ags/image0020.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"졸업생의 데이터(대학 전형, 학과, 합불 정보 있음)와 재학생 데이터(독립변수만 있음) 업로드."} />
								<Div_text text={"데이터는 정규화시켜 구체적인 성적이나 등수를 표시하지 않음(위화감 방지)"} />
								<Div_text text={"재학생 성적 대비 대학별 합격자와 불합격자 성적 시각화(기준 성적은 사용자 선택 가능)"} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/ags/image0030.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"대학 및 학과별 합격자와 불합격자 성적 분포 대비 지원자의 성적 위치 시각화"} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/ags/image0040.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"상세 보기를 선택하면 특정한 케이스에 대한 정보를 “확인” 항목으로 조회 가능"} />
								<Div_text text={"해당 학생에 대한 자료(종합의견, 세특, 수상실적 등)에서 원인을 찾는데 도움이 될 수 있음"} />
							</ul>
						</div>
					</div>

					<div class="flex flex-col space-y-4">
						<Div_heading title={"개인별 보고서"} function={() => click_tab("slide3")} />
						<div class="hidden" id="slide3">
							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/ags/image0050.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"해당 성적 범위 내에서 합격 사례가 있는 학과들 중 관심있는 학과만 모아서 출력할 수 있음 (상위권 도전용)"} />
							</ul>
						</div>
					</div>


					<div class="flex flex-col space-y-4">
						<Div_heading title={"주요과목 합불 비교 및 성적 추이"} function={() => click_tab("slide4")} />
						<div class="hidden" id="slide4">
							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/ags/image0060.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"시각화할 과목에 대해 합격자, 불합격자, 지원자의 성적을 과목별 학기별 추이를 시각화"} />
							</ul>
						</div>
					</div>

					<div class="flex flex-col space-y-4">
						<Div_heading title={"머신러닝 분석"} function={() => click_tab("slide5")} />
						<div class="hidden" id="slide5">
							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/ags/image0070.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"개인별 합격 가능성 예측 및 변수 기여도 확인 (모델에 대한 변수 중요도 확인 가능)"} />
							</ul>
						</div>
					</div>

					<div class="flex flex-col space-y-4">
						<Div_heading title={"주의"} function={() => click_tab("slide6")} />
						<div class="hidden" id="slide6">
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"윈도우용으로 개발되어 맥에서는 사용할 수 없음."} />
								<Div_text text={"현재는 데이터 형식 폼에 맞춰 입력된 데이터에 대해서만 분석이 가능함. 하지만 학교에서 가지고 있는 데이터 형식에 맞춰 코드를 수정할 수도 있음."} />
								<Div_text text={"수시전형 서류 평가에 대한 1차 합격 여부에 대해서만 의미 있는 정보를 제공할 수 있음. 최종 합격 여부는 예측 불가능함."} />
								<Div_text text={"데이터의 수, 학습 데이터의 질(의대 지원생의 데이터 포함 여부, 서류 평가에 중요하게 반영되는 변수의 포함 여부 등)에 따라 머신러닝 교차 검증 성능이 달라질 수 있음."} />
								<Div_text text={"원하는 형태의 데이터가 있는 경우 원하는 형태로의 시각화가 대부분 가능함."} />
								<Div_text text={"진로진학부장이나 3학년 부장과 담임들의 권한을 다르게 하여 접근할 수 있는 정보에 차별을 둘 수 있음."} />
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}

	ReactDOM.render(<Div_main />, document.getElementById("div_main"))
}