import { IClassName } from "../../../../types";
import ChartCardWrapper from "./ChartCardWrapper";

const CalendarComponent = ({ className }: IClassName) => {
  return (
    <ChartCardWrapper className={`${className} py-12`}>
      <table className="w-full text-center">
        <thead>
          <tr className="text-xs uppercase text-center">
            <th className="p-5">Mon</th>
            <th className="p-5">Tue</th>
            <th className="p-5">Wed</th>
            <th className="p-5">Thu</th>
            <th className="p-5">Fri</th>
            <th className="p-5">Sat</th>
            <th className="p-5">Sun</th>
          </tr>
        </thead>
        <tbody className="text-sm text-text-main-color">
          <tr>
            <td></td>
            <td className="p-5">1</td>
            <td className="p-5">2</td>
            <td className="p-5">3</td>
            <td className="p-5">4</td>
            <td className="p-5">5</td>
            <td className="p-5">6</td>
          </tr>
          <tr>
            <td className="p-5">7</td>
            <td className="p-5">8</td>
            <td className="p-5">9</td>
            <td className="p-5">10</td>
            <td className="p-5">11</td>
            <td className="p-5">12</td>
            <td className="p-5">13</td>
          </tr>
          <tr>
            <td className="p-5">14</td>
            <td className="p-5">15</td>
            <td className="p-5">16</td>
            <td className="p-5">17</td>
            <td className="p-5">18</td>
            <td className="p-5">19</td>
            <td className="p-5">20</td>
          </tr>
          <tr>
            <td className="p-5">21</td>
            <td className="p-5">22</td>
            <td className="p-5">23</td>
            <td className="p-5">24</td>
            <td className="p-5">25</td>
            <td className="p-5">26</td>
            <td className="p-5">27</td>
          </tr>
          <tr>
            <td className="p-5">28</td>
            <td className="p-5">29</td>
            <td className="p-5">30</td>
            <td className="p-5">31</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </ChartCardWrapper>
  );
};

export default CalendarComponent;
