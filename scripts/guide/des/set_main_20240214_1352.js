function set_main() {
	function Div_main() {
		return (
			<div class="flex flex-col w-full max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24 space-y-8">
				<Div_header title={"서류평가 시스템"} subtitle={"업무 자동화, 각종 통계, 입학 후 활용"} />

				<div class="grid grid-cols-12 md:grid-cols-1">
					<div class="col-span-3 flex flex-col md:col-span-1">
						<Div_heading title={"PDF 생기부 속 데이터 추출"} function={() => click_tab("slide1")} />
						<Div_heading title={"데이터 분석"} function={() => click_tab("slide2")} />
						<Div_heading title={"선생님 개인 평가 화면"} function={() => click_tab("slide3")} />
						<Div_heading title={"관리자용 앱의 화면"} function={() => click_tab("slide4")} />
						<Div_heading title={"주의"} function={() => click_tab("slide5")} />
					</div>
					
					<div class="col-span-9 flex flex-col px-2 md:col-span-1">
						<div class={class_slide} id="slide1">
							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0010.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"전형 정보(일반, 사통 구분) 엑셀 파일 업로드 후 생기부 pdf 파일이 있는 폴더 위치 입력한 후 검정고시와 같이 스캔 뜬 pdf 파일(글자 인식이 안되는 pdf)을 지정해 줌."} />
								<Div_text text={"“데이터 추출하기” 버튼을 누르면 선택한 항목의 데이터들이 자동 추출됨. (성적 예시)"} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0020.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"(종합의견 예시) : 교과세부특기항이나 진로, 동아리, 자율, 자유학기, 독서 등도 같은 맥락임."} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0030.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"(수상실적) : 수상실적이나 봉사활동 등에 있는 학교 이름은 자동 삭제하여 블라인드 처리됨."} />
								<Div_text text={"출결, 수상, 봉사, 등도 위 표와 같은 방식으로 데이터가 추출됨."} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0040.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"(페이지) : 생기부가 총 몇 페이지인지, 각각의 항목이 몇 페이지에 표시 된지 등을 추출함."} />
								<Div_text text={"학적에는 학교 및 학생 이름, 주민번호, 주소 등 민감 정보가 저장됨."} />
							</ul>
						</div>

						<div class="hidden" id="slide2">
							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0050.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"성적 통계 내기 : 전체 지원자 성적분포에서 해당 학생의 성적 위치를 시각화하는 데 필요한 통계"} />
								<Div_text text={"전년도 지원자 정보 : 동일한 학교에서 이전까지 몇 명 지원해서 최종 몇 명 합격했는지 등에 대한 정보"} />
								<Div_text text={"전년도 합격자 성적 : 전년도 합격자 최하 성적을 기준으로 지원자 위치 표시 가능"} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0060.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"생기부 영역(종합의견, 세특, 진로 등) 중에서 원하는 단어들의 빈도수 추출"} />
								<Div_text text={"전체 평균과 지원자를 비교할 수 있음."} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0070.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"생기부 영역(종합의견, 세특), 추천서, 자기소개서 유사도 측정 및 유사 문장 표시"} />
								<Div_text text={"평가에 반영할 항목 선택 후 교사 및 USB 드라이브 선택한 후 “USB에 교사용 앱 만들기“ 버튼을 클릭하면 개인용 앱 생성됨."} />
							</ul>
						</div>
							
						<div class="hidden" id="slide3">
							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0080.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"교사 개인용 앱의 모습 : 평가 대상자 수, 미평가 수, 평가 결과 통계 확인"} />
								<Div_text text={"평가 환경 설정에서 글자 크기, 줄 간격 등을 평가자에 맞춰 설정 가능"} />
								<Div_text text={"평가 완료된 학생 처리 방법 메뉴에서 “언제나 평가 목록에 포함시키기＂메뉴를 클릭하면 이전 평가 결과를 확인하고 수정할 수 있음."} />
								<Div_text text={"새로운 학생 선택 시 ‘요약 정보‘ 탭으로 이동할 수도 있고 현재 탭을 유지할 수도 있음."} />
								<Div_text text={"기타 원하는 평가 환경 옵션을 추가할 수도 있음."} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0090.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"전형정보, 출결상황(“미인정“이 있는 경우 붉고 진하게 표시), 진로 희망 등 원하는 내용 표시 가능"} />
								<Div_text text={"성적뿐만 아니라 생기부 페이지 수까지 표기 가능"} />
								<Div_text text={"이전년도 지원한 학생들의 데이터(지원자 학교, 1단계, 2단계, 3단계 합불 여부 등)가 있으면 지원자와 동일한 학교에서 몇 명 지원했고 그 중에 몇 명이 2단계 합격했으며 최종 합격자는 몇 명인지 표시 가능"} />
								<Div_text text={"수상실적의 경우 지원자 전체 평균과 비교해서 해당 학생의 수상실적을 표현할 수 있음."} />
								<Div_text text={"전체 지원자의 성적 분포에서 해당 학생의 성적이 어느 정도에 위치하는지 표시할 수 있음."} />
								<Div_text text={"전체 지원자의 생기부에서 추출된 특정 단어들 빈도수와 해당 학생의 단이 빈도수를 비교할 수 있음."} />
								<Div_text text={"독서 기록에 언급된 단어들을 워드 클라우드로 표현할 수 있음."} />
								<Div_text text={"봉사활동의 경우 붉은색이 지원자 전체의 평균 봉사활동 시간이고 그에 비해 해당 학생의 봉사활동 시간은 얼마나 되는지 게이지 형태로 표현할 수 있음."} />
								<Div_text text={"이외에도 생기부에 있는 데이터 중 시각화 하고 싶은 내용이 있으면 “요약정보“ 탭에 표현할 수 있음."} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0100.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"B, C 등의 성적이 눈에 잘 들어오도록 만들었고 C나 D로 갈수록 색이 진해지도록 표현함."} />
								<Div_text text={"붉은 색 점은 지원자의 성적이고 초록색은 지원자 학교의 평균점수임."} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0110.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"종합의견과 교사 추천서 간 공통된 단어를 파란색으로 표시했고 그 중에 “생기부 단어 통계“ 메뉴에서 추출했던 단어들은 배경색까지 칠해서 눈에 띄도록 만들었음."} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0120.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"세특에 대한 단어 빈도수 등을 시각화 할 수 있고 원하는 과목의 세특만 확인 가능."} />
								<Div_text text={"생기부에 검색하고자 하는 단어가 들어간 문구를 검색해서 확인할 수 있음."} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0130.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"pdf 원본을 보여줄 수도 있음. (추출된 데이터로 평가하기를 권고)"} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0150.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"환경설정에서 글자 크기나 줄 간격을 임의로 조정하여 큰 글씨로 글을 읽고 평가할 수 있음."} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0160.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"평가 요소의 입력 범위를 벗어나서 값을 입력할 수 없음."} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0170.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"평가 결과를 확인할 수 있음"} />
							</ul>
						</div>
	
						<div class="hidden" id="slide4">
							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0180.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"선생님들의 개별 평가가 끝난 경우 평가 절차에 따른 평가 결과를 종합하여 확인할 수 있음"} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0190.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"학교와 관련된 각종 기술 통계를 지도와 함께 시각화 가능함."} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0200.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"전형위원회나 선정심사위원회 회의 자료를 위한 통계들을 자동 추출할 수 있음."} />
							</ul>

							<Div_image img_url={"https://cdn.jsdelivr.net/gh/futuredu-official/CDN/images/contents/guide/des/image0210.png"} />
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"파일을 업로드하여 카이제곱 검정, T검정, ANOVA, 상환관계, 회귀 분석 등이 가능함."} />
								<Div_text text={"통계적인 분석과 함께 시각화도 가능하며 마우스 오른쪽 버튼을 클릭하여 복사하여 붙여 넣을 수도 있음."} />
							</ul>
						</div>
		
						<div class="hidden" id="slide5">
							<ul class="space-y-1 text-gray-500 list-disc list-inside">
								<Div_text text={"윈도우용으로 개발되어 맥에서는 사용할 수 없음."} />
								<Div_text text={"나이스에서 출력된 pdf 파일이 아닌 경우(OCR 처리된 스캔 문서 포함) 에러가 발생함. 이러한 문서의 경우 추출 예외 항목에 수험 번호와 사유를 입력해서 추출을 건너 뛰어야 함."} />
								<Div_text text={"현재 시스템은 3학년 지원자의 경우 2학년 까지의 기록만 추출하고 2학년 지원자의 경우 1학년 까지의 기록만 추출하고 있음. 만약 3학년 지원자의 3학년 내용까지 추출하기 원할 경우 추가 작업이 필요함."} />
								<Div_text text={"본 프로그램은 병렬 처리가 지원되지 않음. 앞으로도 병렬 처리는 지원 불가능함. 작업(분석)을 실행하는 중에 다른 메뉴를 클릭하거나 추가 작업(분석) 버튼을 클릭해도 이전 작업과 추가 작업이 모두 끝나기 전에는 아무 결과도 확인할 수 없음. 데이터 추출 작업만 지원자 수에 따라 최소 30분에서 1시간 이상 소요될 수 있는데 이러한 작업 수행 중 다른 메뉴를 클릭했는데 해당 내용이 보이지 않는다고 여러 메뉴나 버튼을 마구 클릭하면 2~3시간이 지나도 결과를 확인할 수 없을 뿐만 아니라 에러의 원인이 될 수 있음."} />
								<Div_text text={"추출된 데이터의 띄어쓰기는 완벽하지 않음. 생기부의 오른쪽 맨 끝과 다음 줄 맨 처음 시작 사이의 띄어쓰기가 명확하지 않기 때문임. 추출된 데이터는 띄어쓰기가 다를 수 있지만 화면에 보여지는 문장의 경우 자동으로 띄어쓰기를 교정해서 정상적으로 출력되므로 교사용 화면을 보고 평가하면 문제되지 않음."} />
								<Div_text text={"생기부 기록 지침을 따라 기록한 것은 문제가 없지만 지침을 따르지 않은 경우 학년이나 교과 분류에 오류가 생길 수 있음. (예를 들어 문장이 끝날 때 마침표를 찍어야 하는데 마침표가 없는 경우 그 다음 줄의 마침표 까지를 하나의 문장으로 인식하여 2학년 기록의 첫 문장이 1학년 기록으로 분류될 수 있음.)"} />
								<Div_text text={"독서의 경우와 같이 교과 분류가 안 되는 경우 NA(결측치의 의미)로 표시되는 경우가 있을 수 있음."} />
							</ul>
						</div>
					</div>

				</div>
			</div>
		)
	}

	ReactDOM.render(<Div_main />, document.getElementById("div_main"))
}