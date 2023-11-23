export interface User {
  identification: string;
  password: string;
  userType: string;
  gender: string;
  birth: number;
}

export interface Lecture {
  lectureId: number;
  lectureName: string;
  lectureTime: string;
  lectureDay: string;
  lectureMaxMember: number;
}
