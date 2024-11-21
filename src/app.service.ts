import { Injectable } from '@nestjs/common';
import { FormRequestDto } from './dto/form-request.dto';
import { Form } from './entities/form.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailService } from './mail.service';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Form)
    private formRepository: Repository<Form>,
    private readonly mailService: MailService,
  ) {}

  async create(formRequestDto: FormRequestDto): Promise<Form> {
    await this.sendEmail(formRequestDto);

    return await this.formRepository.save(formRequestDto);
  }

  async sendEmail(formRequestDto: FormRequestDto) {
    const { name, email, subject, message } = formRequestDto;
    //sa
    const emailMessage = `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `;

    try {
      await this.mailService.sendMail(
        'shakeitlovehs@gmail.com',
        subject,
        emailMessage,
      );
      return { message: 'Email sent successfully!' };
    } catch (error) {
      return { message: 'Failed to send email.' };
    }
  }
}
